import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface EditCategoryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const EditCategoryModal = ({ open, onOpenChange }: EditCategoryModalProps) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>

          <DialogDescription>
            Update your category information
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
export default EditCategoryModal
