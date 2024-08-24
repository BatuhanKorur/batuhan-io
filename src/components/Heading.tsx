import { ReactNode } from 'react'

export function Heading({ children }: {
  children: ReactNode
}) {
  return (
    <div className="border-b px-6 py-9 md:px-7 md:py-10 lg:px-8 lg:py-12">
      <h2 className="font-code font-[550] text-[22px] md:text-[24px]">{ children }</h2>
    </div>
  )
}
