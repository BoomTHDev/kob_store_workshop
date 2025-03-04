interface SidebarLinkProps {
  label: string
  href: string
  icon: React.ReactNode
  isActive: boolean
}

const SidebarLink = ({ label, href, icon, isActive }: SidebarLinkProps) => {
  return <div>SidebarLink</div>
}
export default SidebarLink
