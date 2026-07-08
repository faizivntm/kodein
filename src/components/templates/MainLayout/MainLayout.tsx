import type { ReactNode } from 'react'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

// Template: kerangka halaman (header + area konten). Tidak tahu isi konten,
// cuma mengatur tata letak.
export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer/>
    </div>
  )
}
