import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CategoryType } from '@/types/category'
import { Search } from 'lucide-react'

interface CategoryListProps {
  categories: CategoryType[]
}

const CategoryList = ({ categories }: CategoryListProps) => {
  console.log(categories)
  const cate: CategoryType[] = [
    {
      id: '1',
      name: 'C1',
      status: 'Active',
    },
    {
      id: '2',
      name: 'C2',
      status: 'Inactive',
    },
  ]

  return (
    <Card>
      <CardHeader className='pb-4'>
        <CardTitle className='text-lg sm:text-xl'>Category List</CardTitle>

        <Tabs>
          <TabsList className='grid grid-cols-3 mb-4'>
            <TabsTrigger value='all'>All Categories</TabsTrigger>
            <TabsTrigger value='active'>Active</TabsTrigger>
            <TabsTrigger value='inactive'>Inactive</TabsTrigger>
          </TabsList>

          <div className='relative'>
            <Search
              size={16}
              className='absolute left-2 top-2.5 text-muted-foreground'
            />
            <Input
              placeholder='Search categories...'
              className='pl-8'
            />
          </div>
        </Tabs>
      </CardHeader>

      <CardContent>
        <div className='border rounded-md overflow-hidden'>
          <div className='grid grid-cols-12 bg-muted py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium'>
            <div className='col-span-1 hidden sm:block'>No.</div>
            <div className='col-span-6 sm:col-span-5'>Category name</div>
            <div className='col-span-2 text-center hidden sm:block'>
              Products
            </div>
            <div className='col-span-3 sm:col-span-2 text-center'>Status</div>
            <div className='col-span-3 sm:col-span-2 text-right'>Actions</div>
          </div>
        </div>

        {cate.length > 0 ? (
          cate.map((category, index) => <div key={index}>Test</div>)
        ) : (
          <div className='py-8 text-center text-muted-foreground'>
            No categories found matching your search
          </div>
        )}
      </CardContent>
    </Card>
  )
}
export default CategoryList
