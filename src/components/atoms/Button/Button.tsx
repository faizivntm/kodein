import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const variants: Record<Variant, string> = {
  primary: 'border-2 border-line bg-surf text-foam shadow-brutal brutal-press hover:bg-surf-deep',
  secondary: 'border-2 border-line bg-tide text-foam shadow-brutal brutal-press',
  ghost: 'bg-transparent text-foam underline decoration-surf-deep decoration-2 underline-offset-2 hover:decoration-4',
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center px-5 py-2.5 text-sm font-bold disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
