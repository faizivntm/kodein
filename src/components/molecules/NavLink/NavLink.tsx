import { Link } from '@tanstack/react-router'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

// Molecule: membungkus Link TanStack + styling state aktif.
// `[&.active]` memanfaatkan class "active" yang otomatis diberikan TanStack Router.
export function NavLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        'font-bold text-foam underline-offset-4 hover:underline [&.active]:underline [&.active]:decoration-surf-deep [&.active]:decoration-4',
        typeof className === 'string' ? className : undefined,
      )}
    />
  )
}
