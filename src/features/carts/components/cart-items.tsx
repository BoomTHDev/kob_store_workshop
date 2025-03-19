import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CartItems = () => {
  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">รายการในตะกร้า</h2>

      <div className="relative size-24 border border-primary rounded-md overflow-hidden">
        <Link href={`/products/(product id)`}>
          <Image
            alt="Product Title"
            src="/images/no-product-image.webp"
            fill
            className="object-cover"
          />
        </Link>
      </div>
    </Card>
  );
};

export default CartItems;
