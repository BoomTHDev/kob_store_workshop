import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/formatPrice";
import { getStatusColor } from "@/lib/utils";
import { OrderType } from "@/types/order";
import Image from "next/image";

interface AdminOrderDetailProps {
  order: OrderType;
}

const AdminOrderDetail = ({ order }: AdminOrderDetailProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <CardTitle className="text-xl">Order Details</CardTitle>
              <Badge className={getStatusColor(order.status)}>
                {order.status}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="relative size-10 border rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            alt={item.productTitle}
                            src={
                              item.productImage ||
                              "/images/no-product-image.webp"
                            }
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium">{item.productTitle}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {formatPrice(item.price)}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatPrice(item.totalPirce)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer Information</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div>
                <Label className="text-muted-foreground text-sm">Name</Label>
                <div className="font-medium">
                  {order.customer.name || "Not provided"}
                </div>
              </div>

              <div>
                <Label className="text-muted-foreground text-sm">Email</Label>
                <div className="font-medium">{order.customer.email}</div>
              </div>

              <div>
                <Label className="text-muted-foreground text-sm">Phone</Label>
                <div className="font-medium">
                  {order.phone || "Not provided"}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shipping Information</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div>
                <Label className="text-muted-foreground text-sm">Address</Label>
                <div className="font-medium">
                  {order.address || "Not provided"}
                </div>
              </div>

              <div>
                <Label className="text-muted-foreground text-sm">
                  Tracking Number
                </Label>
                <div className="font-medium">
                  {order.trackingNumber || "Not provided"}
                </div>
              </div>

              <div>
                <Label className="text-muted-foreground text-sm">Notes</Label>
                <div className="font-medium">{order.note || "None"}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetail;
