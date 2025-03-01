import { UserType } from '@/types/user'
import MobileMenu from './mobile-menu'
import CartIcon from './cart-icon'

interface NavbarProps {
  user: UserType | null
}

const Navbar = ({ user }: NavbarProps) => {

  return (
    <nav className='flex items-center gap-3'>
      {/* Mobile Navigation */}
      {user && <CartIcon />}
      <MobileMenu user={user} />

      {/* Desktop Navigation */}
      <div className='hidden'>
        <div>Desktop Links</div>
        {user ? (
          <div>Desktop User Menu</div>
        ) : (
          <div>Go to signin button</div>
        )}
      </div>
    </nav>
  )
}
export default Navbar