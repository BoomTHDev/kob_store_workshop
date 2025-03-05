import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const HeaderAdmin = () => {
  return (
    <header>
      <div>
        {/* Toggle Sidebar Button */}
        <Button>
          <Menu size={20} />
        </Button>

        {/* Profile Dropdown */}
        <div>Profile Dropdown</div>
      </div>
    </header>
  )
}
export default HeaderAdmin
