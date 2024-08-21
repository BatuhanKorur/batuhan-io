import React from 'react'

export interface INavbarItem {
  href: string
  className?: string
  children: React.ReactNode
}

export interface ISocialButton {
  link: string
  children: React.ReactNode
}
