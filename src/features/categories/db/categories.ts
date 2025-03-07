import { db } from '@/lib/db'
import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag
} from 'next/cache'
import { getCategoryGlobalTag, revalidateCategoryCache } from './cache'
import { categorySchema } from '@/features/categories/schemas/categories'

interface CreateCategoryInput {
  name: string
}

export const getCategories = async () => {
  'use cache'

  cacheLife('days')
  cacheTag(getCategoryGlobalTag())

  try {
    return await db.category.findMany({
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        name: true,
        status: true
      }
    })
  } catch (error) {
    console.error('Error getting categories data:', error)
    return []
  }
}

export const createCategory = async (input: CreateCategoryInput) => {
  try {
    const { success, data, error } = categorySchema.safeParse(input)

    if (!success) {
      return {
        message: 'Please enter valid data',
        error: error.flatten().fieldErrors
      }
    }

    // Check category already exists from database
    const category = await db.category.findFirst({
      where: {
        name: data.name
      }
    })

    if (category) {
      return {
        message: 'A category with this name already exists'
      }
    }

    // Create new category
    const newCategory = await db.category.create({
      data: {
        name: data.name
      }
    })

    revalidateCategoryCache(newCategory.id)

  } catch (error) {
    console.error('Error creating new category:', error)
    return {
      message: 'Something went wrong. Please try again later'
    }
  }
}