import Modal from "@/components/shared/modal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductType } from "@/types/product";
import { TabsContent } from "@radix-ui/react-tabs";

interface ProductDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProductType | null;
}

const ProductDetailModal = ({
  open,
  onOpenChange,
  product,
}: ProductDetailModalProps) => {
  if (!product) return null;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={product.title}
      description={`SKU: ${product.sku}`}
      className="sm:max-w-3xl"
    >
      <div>
        <Tabs>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="images">
              Images ({product.images.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">Overview</TabsContent>
          <TabsContent value="details">Details</TabsContent>
          <TabsContent value="images">Images</TabsContent>
        </Tabs>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;
