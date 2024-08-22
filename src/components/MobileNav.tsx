'use client'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useState } from 'react'
import { navLinks } from '@/data/navLinks'
import Link from 'next/link'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button className="h-full aspect-square v-center border-l lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <HiOutlineMenuAlt3 size={22} className="opacity-75" />
      </button>
      { isOpen && (
        <div className="absolute size-full inset-0 pt-[60px]">
          <div className="relative inset-0 bg-background h-full z-20">
            { navLinks.map(nav => (
              <div key={nav.label} className="px-8 py-8 border-b">
                <Link href={nav.href} onClick={() => setIsOpen(false)}>
                  <span className="font-code">{ nav.label }</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
