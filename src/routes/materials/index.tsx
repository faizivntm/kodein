import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/components/molecules/SectionHeading'
import { MaterialCard } from '@/components/molecules/MaterialCard'
import { sortedMaterials } from '@/content/materials'

export const Route = createFileRoute('/materials/')({
  component: Materials,
})

function Materials() {
  const items = sortedMaterials()

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading
        title="Semua Materi"
        subtitle="Kumpulan catatan & pembelajaran untuk semua."
      />

      {items.length === 0 ? (
        <p className="mt-10 text-mist">Belum ada materi. Tambahkan di src/content/materials.ts.</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => (
            <MaterialCard key={m.slug} material={m} />
          ))}
        </div>
      )}
    </div>
  )
}
