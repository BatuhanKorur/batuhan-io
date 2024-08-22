import { cva, VariantProps } from 'cva'
import { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyle> {
  asChild?: boolean
  link?: string | null
}

const buttonStyle = cva({
  base: [
    'v-click',
  ],
  variants: {
    variant: {
      secondary: [
        'bg-foreground/[2%] px-5 py-4 rounded-md ring-1 ring-foreground/[6%] hover:bg-foreground/[3%]',
      ],
      ghost: [
        'text-blue-200 v-click hover:text-blue-300',
      ],
    },
    size: {
      default: 'text-[15px] font-[440] tracking-[0.3px]',
    },
  },
  defaultVariants: {
    variant: 'ghost',
    size: 'default',
  },
})
export function Button({ children, size, variant, link = null }: ButtonProps) {
  const cn = `${buttonStyle({ variant, size })}`
  if (link) {
    return <Link href={link} className={cn}>{ children }</Link>
  }
  else {
    return <button className={cn}>{ children }</button>
  }
}
