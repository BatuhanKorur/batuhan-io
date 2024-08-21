import { IHeading } from '@/lib/types'

export function Heading({ children }: IHeading) {
  return (
    <div className="px-6 py-12 border-b">
      <h2 className="font-code text-lg">{ children }</h2>
    </div>
  )
}
