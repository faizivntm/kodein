import { Link } from '@tanstack/react-router'
import { FaPenToSquare, FaTrash } from 'react-icons/fa6'
import type { Material } from '@/content/materials'
import { formatDate } from '@/lib/utils'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteMaterial } from '@/api/materials/deleteMaterial'

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

  const [toDelete, setToDelete] = useState<Material | null>(null)
  const queryClient = useQueryClient()
  const del = useMutation({
    mutationFn: (id: number) => deleteMaterial(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['materials'] })
      setToDelete(null)
    },
  })

  const askDelete = (m: Material) => {
    del.reset() // buang error dari percobaan sebelumnya
    setToDelete(m)
  }

  return (
    <div className="group brutal brutal-press relative flex flex-col p-5">
      <Link
        to="/materials/$slug"
        params={{ slug: material.slug }}
        search={admin ? { admin: true } : {}}
        aria-label={material.title}
        className="absolute inset-0"
      />

      <div className="flex items-center justify-between text-xs text-mist">
        <span className="border-2 border-line bg-surf px-2.5 py-1 font-bold text-foam">
          {material.category}
        </span>
        <time dateTime={material.date}>{formatDate(material.date)}</time>
      </div>

      <h3 className="mt-3 font-display text-lg font-bold text-foam underline-offset-2 group-hover:underline">
        {material.title}
      </h3>
      <p className="mt-1 line-clamp-3 text-sm text-mist">{material.summary}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-bold text-foam">Baca →</span>
        {admin && (
          <div className='flex flex-row gap-2'>
            <Link
              to="/admin/materials/$id"
              params={{ id: String(material.id) }}
              aria-label={`Edit ${material.title}`}
              className="relative z-10 inline-flex items-center gap-1.5 border-2 border-line bg-tide px-2.5 py-1 text-xs font-bold text-foam transition-colors hover:bg-surf"
            >
              <FaPenToSquare className="h-3 w-3" /> Edit
            </Link>

            <div>
              <button
              type="button"
              aria-label="Hapus materi"
              title="Hapus"
              className="relative z-10 inline-flex items-center gap-1.5 border-2 border-line bg-tide px-2.5 py-1 text-xs font-bold text-foam transition-colors hover:bg-red-400"
              onClick={() => askDelete(material)}
              >
              <FaTrash className="h-3.5 w-3.5" /> Delete
              </button>
            </div>
          </div>
          )}
      </div>

      {/* Dialog konfirmasi hapus */}
      {toDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-line/40 p-6">
          <div className="w-full max-w-sm border-2 border-line bg-tide p-6 shadow-brutal-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border-2 border-line bg-red-400 text-foam">
              <FaTrash className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-center font-display text-lg font-bold text-foam">
              Hapus materi?
            </h3>
            <p className="mt-1 break-words text-center text-sm text-mist">
              "{toDelete.title}" akan dihapus permanen. Tindakan ini tidak bisa dibatalkan.
            </p>

            {del.isError && (
              <p className="mt-4 border-2 border-line bg-red-100 px-3 py-2 text-sm font-medium text-red-700">
                {del.error.message}
              </p>
            )}

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setToDelete(null)}
                disabled={del.isPending}
                className="flex-1 border-2 border-line bg-tide px-4 py-2 text-sm font-bold text-foam transition-colors hover:bg-abyss disabled:opacity-50"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => toDelete.id && del.mutate(toDelete.id)}
                disabled={del.isPending}
                className="flex-1 border-2 border-line bg-red-400 px-4 py-2 text-sm font-bold text-foam shadow-brutal brutal-press disabled:opacity-50"
              >
                {del.isPending ? 'Menghapus…' : 'Hapus'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
