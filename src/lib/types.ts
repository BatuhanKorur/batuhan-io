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

export interface IHeading {
  children: React.ReactNode
}

export interface IPortfolioItem {
  title: string
  description: string
  image: string
  className?: string
}
