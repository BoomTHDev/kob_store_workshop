import Modal from "@/components/shared/modal";
import { ProductType } from "@/types/product";

interface DeleteProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProductType | null;
}

const DeleteProductModal = ({
  open,
  onOpenChange,
  product,
}: DeleteProductModalProps) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Delete Product"
      description={`Are you sure you want to delete the product "${product?.title}"`}
    >
      Test
    </Modal>
  );
};

export default DeleteProductModal;
