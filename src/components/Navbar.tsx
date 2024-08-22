import Link from 'next/link'
import { navLinks } from '@/data/navLinks'
import { INavItem } from '@/lib/types'
import MobileNav from '@/components/MobileNav'

const NavbarItem = ({ label, href }: INavItem) => {
  return (
    <Link href={href} className="border-r h-full v-align v-click hover:bg-foreground/[1%]">
      <p className="text-[15px] font-[450] tracking-[0.1px] px-10 opacity-80">{ label }</p>
    </Link>
  )
}

export function Navbar() {
  return (
    <div className="border-b h-[60px] v-between">
      <div className="h-full v-align pl-4 lg:pl-5 lg:mr-16">
        <Link href="/">
          <h1 className="text-[18px] font-code font-[525] tracking-[-0.2px]">
            batuhan korur
          </h1>
        </Link>
      </div>
      <div className="hidden lg:flex lg:grow lg:h-full border-l">
        { navLinks.map(nav => (
          <NavbarItem key={nav.label} href={nav.href} label={nav.label} />
        ))}
      </div>
      <MobileNav />
    </div>
  )
}
