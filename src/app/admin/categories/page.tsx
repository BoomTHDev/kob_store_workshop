import { Badge } from '@/components/ui/badge'

const CategoriesAdminPage = () => {
  return (
    <div className='p-4 sm:p-6 space-y-6'>
      {/* Category Header */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl sm:text-3xl font-bold'>
            Category Management
          </h1>
          <p className='text-sm text-muted-foreground'>
            Organize your product categories efficiently
          </p>
        </div>

        <div className='flex flex-wrap gap-2 sm:gap-3'>
          <Badge
            variant='outline'
            className='px-2 sm:px-3 py-1 text-xs sm:text-sm'
          >
            <span className='font-semibold text-green-600'>10</span>
            Active
          </Badge>

          <Badge
            variant='outline'
            className='px-2 sm:px-3 py-1 text-xs sm:text-sm'
          >
            <span className='font-semibold text-gray-500'>10</span>
            Inactive
          </Badge>

          <Badge
            variant='outline'
            className='px-2 sm:px-3 py-1 text-xs sm:text-sm'
          >
            <span className='font-semibold text-blue-600'>10</span>
            Total
          </Badge>
        </div>
      </div>

      {/* Form */}
      <div>Form</div>
    </div>
  )
}
export default CategoriesAdminPage
