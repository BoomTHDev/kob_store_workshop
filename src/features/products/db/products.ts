import { db } from "@/lib/db";
import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag,
} from "next/cache";
import { getProductGlobalTag, revalidateProductCache } from "./cache";
import { createProductSchema } from "../schemas/products";

interface CreateProductInput {
  title: string;
  description: string;
  cost?: number;
  basePrice: number;
  price: number;
  stock: number;
  categoryId: string;
}

export const getProducts = async () => {
  "use cache";

  cacheLife("hours");
  cacheTag(getProductGlobalTag());

  try {
    const products = await db.product.findMany({
      include: {
        category: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });

    return products.map((product) => ({
      ...product,
      lowStock: 5,
      sku: product.id.substring(0, 8).toUpperCase(),
    }));
  } catch (error) {
    console.error("Error getting products:", error);
    return [];
  }
};

export const createProduct = async (input: CreateProductInput) => {
  try {
    const { success, data, error } = createProductSchema.safeParse(input);

    if (!success) {
      return {
        message: "Please enter valid product information",
        error: error.flatten().fieldErrors,
      };
    }

    // Check if category exists
    const category = await db.category.findUnique({
      where: {
        id: data.categoryId,
        status: "Active",
      },
    });

    if (!category) {
      return {
        message: "Selected category not found or inactive",
      };
    }

    // Create new product
    const newProduct = await db.product.create({
      data: {
        title: data.title,
        description: data.description,
        cost: data.cost,
        basePrice: data.basePrice,
        price: data.price,
        stock: data.stock,
        categoryId: data.categoryId,
      },
    });

    revalidateProductCache(newProduct.id);
  } catch (error) {
    console.error("Error creating product:", error);
    return {
      message: "Something went wrong. Please try again later",
    };
  }
};
