import Modal from "@/components/shared/modal";
import { ProductType } from "@/types/product";

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
    >
      Test
    </Modal>
  );
};

export default ProductDetailModal;
