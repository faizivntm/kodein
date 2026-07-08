import { Link } from '@tanstack/react-router'
import type { ComponentProps } from 'react'

// Molecule: membungkus Link TanStack + styling state aktif.
// `[&.active]` memanfaatkan class "active" yang otomatis diberikan TanStack Router.
export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className="text-slate-300 hover:text-cyan-400 [&.active]:font-semibold [&.active]:text-cyan-400"
    />
  )
}
