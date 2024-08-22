import React from 'react'

export interface INavItem {
  label: string
  href: string
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
  desc: string
  img: string
  link: string
}
