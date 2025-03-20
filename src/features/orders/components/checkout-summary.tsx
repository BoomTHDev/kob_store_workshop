import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartType } from "@/types/cart";
import Image from "next/image";

interface CheckoutSummaryProps {
  cart: CartType;
}

const CheckoutSummary = ({ cart }: CheckoutSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">สรุปรายการสั่งซื้อ</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {cart.items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="relative size-12 border rounded-md overflow-hidden">
                <Image
                  alt={item.product.title}
                  src={
                    item.product.mainImage?.url ||
                    "/images/no-product-image.webp"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CheckoutSummary;
