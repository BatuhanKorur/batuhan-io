import { cva, VariantProps } from 'cva'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyle> {
  asChild?: boolean
}

const buttonStyle = cva({
  variants: {
    variant: {
      ghost: [
        'text-blue-200 text-base font-[450]',
      ],
    },
  },
  defaultVariants: {
    variant: 'ghost',
  },
})
export function Button({ children, variant = 'ghost' }: ButtonProps) {
  return (
    <button className={buttonStyle({ variant })}>
      { children }
    </button>
  )
}
