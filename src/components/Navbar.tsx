import Link from 'next/link'
import { INavbarItem } from '@/lib/types'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const NavbarItem = ({ href, className, children }: INavbarItem) => {
  return (
    <Link href={href} className={`border-r h-full v-align v-click hover:bg-foreground/[1%] ${className}`}>
      <p className="text-[15px] font-[450] tracking-[0.1px] px-8 opacity-80">{children}</p>
    </Link>
  )
}

export function Navbar() {
  return (
    <div className="border-b h-[56px] v-between">
      <div className="h-full v-align pl-4 mr-8">
        <Link href="/">
          <h1 className="text-[16px] font-code font-[515] tracking-[-0.25px]">batuhan korur</h1>
        </Link>
      </div>
      <div className="hidden lg:flex lg:grow lg:h-full">
        <NavbarItem href="/about" className="border-l">about</NavbarItem>
        <NavbarItem href="/portfolio" className="border-l">portfolio</NavbarItem>
        <NavbarItem href="/blog" className="border-l">blog</NavbarItem>
        <NavbarItem href="/contact" className="border-l">contact</NavbarItem>
      </div>
      <div className="h-full aspect-square v-center border-l lg:hidden">
        <HiOutlineMenuAlt3 size={22} className="opacity-75" />
      </div>
    </div>
  )
}
