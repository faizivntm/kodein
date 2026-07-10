import { Link } from '@tanstack/react-router'
import { FaPenToSquare } from 'react-icons/fa6'
import type { Material } from '@/content/materials'
import { formatDate } from '@/lib/utils'

// Molecule: kartu ringkas satu materi. Dipakai di home & /materials.
// `admin` meneruskan konteks admin (?admin=1) ke detail + munculkan tombol Edit.
// Pola "stretched link": seluruh kartu nge-link ke detail, tombol Edit di atasnya
// (z-10) — <a> di dalam <a> itu HTML tidak valid.
export function MaterialCard({
  material,
  admin = false,
}: {
  material: Material
  admin?: boolean
}) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-line bg-tide/60 p-5 transition-colors hover:border-surf/50 hover:bg-tide">
      <Link
        to="/materials/$slug"
        params={{ slug: material.slug }}
        search={admin ? { admin: true } : {}}
        aria-label={material.title}
        className="absolute inset-0 rounded-xl"
      />

      <div className="flex items-center justify-between text-xs text-mist">
        <span className="rounded-full bg-surf/10 px-2.5 py-1 font-medium text-surf">
          {material.category}
        </span>
        <time dateTime={material.date}>{formatDate(material.date)}</time>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-foam group-hover:text-surf">
        {material.title}
      </h3>
      <p className="mt-1 line-clamp-3 text-sm text-mist">{material.summary}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-surf">Read →</span>
        {admin && (
          <Link
            to="/admin/materials/$id"
            params={{ id: String(material.id) }}
            aria-label={`Edit ${material.title}`}
            className="relative z-10 inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1 text-xs text-mist transition-colors hover:border-surf/50 hover:text-foam"
          >
            <FaPenToSquare className="h-3 w-3" /> Edit
          </Link>
        )}
      </div>
    </div>
  )
}
