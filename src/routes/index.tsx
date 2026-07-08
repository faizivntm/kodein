import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/atoms/Button'
import { SectionHeading } from '@/components/molecules/SectionHeading'
import { MaterialCard } from '@/components/molecules/MaterialCard'
import { categories, sortedMaterials } from '@/content/materials'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const latest = sortedMaterials().slice(0, 4)
  const topics = categories()

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      {/* Hero */}
      <section className="py-20">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          paiss<span className="text-surf">Paus</span>.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-mist">
          Mungkin coding tak lagi butuh kamu karena AI menggantikan pekerjaanmu.
          Tapi kalau AI gagal, dunia tetap butuh programmer seperti kamu.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/materials">
            <Button className="min-w-40">Start Swimming</Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary">Take a breath</Button>
          </Link>
        </div>
      </section>

      {/* Explore: kategori */}
      <section className="py-10">
        <SectionHeading
          title="Where do you want to go?"
          subtitle="Just keep swimming, and you'll find your place."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <Link
              key={t.name}
              to="/materials"
              className="rounded-xl border border-line bg-tide/60 p-6 transition-colors hover:border-surf/50 hover:bg-tide"
            >
              <h3 className="font-semibold text-foam">{t.name}</h3>
              <p className="mt-1 text-sm text-mist">{t.total} materi</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest: materi terbaru */}
      <section className="py-10 pb-20">
        <SectionHeading
          title="Fresh from the surface"
          subtitle="Materi & catatan terbaru dari kedalaman laut."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((m) => (
            <MaterialCard key={m.slug} material={m} />
          ))}
        </div>
      </section>
    </div>
  )
}
