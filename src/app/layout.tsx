import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'
import '@/assets/main.css'
import { ReactNode } from 'react'
import { cva } from 'cva'

export const metadata: Metadata = {
  title: 'Batuhan Korur | Full-Stack Javascript Developer',
  description: 'Full-Stack Javascript Developer with a passion for building web applications.',
}

interface RootLayoutProps {
  children: Readonly<ReactNode>
}

const container = cva({
  base: [
    'grow size-full flex flex-col relative',
    'border rounded bg-background shadow-sm',
    'lg:max-w-screen-xl lg:mx-auto',
  ],
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-svh flex flex-col p-3 md:p-5 lg:p-7">
        <main className={container()}>
          <Navbar />
          <div className="grow flex flex-col size-full">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
