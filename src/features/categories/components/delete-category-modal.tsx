import Modal from "@/components/shared/modal";
import { CategoryType } from "@/types/category";

interface DeleteCategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: CategoryType | null;
}

const DeleteCategoryModal = ({
  open,
  onOpenChange,
  category,
}: DeleteCategoryModalProps) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Delete Category"
      description="Are you sure want to delete the category?"
    >
      Test
    </Modal>
  );
};

export default DeleteCategoryModal;
