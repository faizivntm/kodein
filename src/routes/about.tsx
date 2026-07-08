import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/components/molecules/SectionHeading'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <SectionHeading title="About paissPaus" subtitle="Filosofi di balik nama." />
      <div className="mt-8 space-y-5 leading-relaxed text-mist">
        <p>
          <span className="font-semibold text-foam">pais</span> adalah saya.{' '}
          <span className="font-semibold text-foam">Paus</span> adalah hewan yang
          kuat, berenang tenang di laut yang luas.
        </p>
        <p>
          Website ini berisi catatan saya dan pembelajaran yang saya bagikan untuk
          semua. Seperti paus yang terus berenang, belajar coding juga soal terus
          bergerak — <em className="text-surf">just keep swimming</em>.
        </p>
      </div>
    </div>
  )
}
