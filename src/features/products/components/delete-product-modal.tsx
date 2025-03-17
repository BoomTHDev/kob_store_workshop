import Modal from "@/components/shared/modal";
import SubmitBtn from "@/components/shared/submit-btn";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/product";
import { Trash2 } from "lucide-react";
import Form from "next/form";

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
      <Form action="">
        <input type="hidden" name="product-id" value={product?.id} />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <SubmitBtn
            name="Delete"
            icon={Trash2}
            className="bg-destructive hover:bg-destructive/80"
          />
        </div>
      </Form>
    </Modal>
  );
};

export default DeleteProductModal;
