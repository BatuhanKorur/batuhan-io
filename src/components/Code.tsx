import { ReactNode } from 'react'
import { cva, VariantProps } from 'cva'

const codeStyles = cva({
  base: [
    'font-code text-[15px]',
  ],
  variants: {
    v: {
      comment: 'text-code-comment',
      keyword: 'text-code-keyword',
      var: 'text-code-var',
      string: 'text-code-string',
      operator: 'text-code-operator',
      property: 'text-code-property',
    },
  },
  defaultVariants: {
    v: 'comment',
  },
})

interface CodeProps extends VariantProps<typeof codeStyles> {
  children: ReactNode
  href?: string | null
  indent?: boolean
}
export function Code({ children, href = null, v, indent = false }: CodeProps) {
  const cn = `${codeStyles({ v })} ${indent ? 'pl-5' : 'pl-0'}`
  if (href) {
    return (
      <div className={cn}>
        {href.startsWith('mailto')
          ? <a href={href}>{children}</a>
          : <a href={href} target="_blank" rel="">{children}</a>}
      </div>
    )
  }
  else {
    return (
      <div className={cn}>
        { children }
      </div>
    )
  }
}

interface CodeLineProps {
  n: number
  children?: ReactNode
}
export function CodeLine({ n, children }: CodeLineProps) {
  return (
    <div className="mb-1 v-align v-hover hover:bg-foreground/[2%]">
      <span className="font-code text-code-gutter pr-6 text-[13px] font-[550]">{ n }</span>
      <div className="flex items-center space-x-1.5">
        { children }
      </div>
    </div>
  )
}
