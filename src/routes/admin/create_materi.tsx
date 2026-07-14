import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import {
  FaArrowRight,
  FaBookOpen,
  FaClock,
  FaCode,
  FaFolderOpen,
  FaLayerGroup,
  FaListCheck,
  FaPen,
  FaPenToSquare,
  FaTrash,
} from 'react-icons/fa6'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AdminTopbar } from '@/components/organisms/AdminTopbar'
import { useMaterials } from '@/api/materials/useMaterials'
import { deleteMaterial } from '@/api/materials/deleteMaterial'
import { formatDate } from '@/lib/utils'
import type { Material } from '@/content/materials'

export const Route = createFileRoute('/admin/create_materi')({
  // Guard: tanpa token, lempar ke login.
  beforeLoad: () => {
    if (!localStorage.getItem('token')) {
      throw redirect({ to: '/admin/login' })
    }
  },
  component: Dashboard,
})

// Aksi dashboard. `to` diisi kalau fiturnya sudah siap; sisanya tampil "Segera".
const ACTIONS = [
  {
    title: 'Tulis Materi',
    desc: 'Kanvas menulis ala blog — bersih, mengalir, langsung terbit.',
    Icon: FaPen,
    to: '/admin/materials/new' as const,
  },
  {
    title: 'Kelola Materi',
    desc: 'Edit atau hapus materi yang sudah terbit.',
    Icon: FaListCheck,
    to: '/materials' as const,
  },
  {
    title: 'Tambah Project',
    desc: 'Publikasikan template atau repo ke halaman Tools.',
    Icon: FaCode,
  },
  {
    title: 'Kelola Project',
    desc: 'Perbarui atau hapus project di halaman Tools.',
    Icon: FaFolderOpen,
  },
]

function Dashboard() {
  const { data, isLoading } = useMaterials()
  const materials = data ?? []
  const categoryCount = new Set(materials.map((m) => m.category)).size
  const recent = materials.slice(0, 5) // server sudah urut terbaru

  const stats = [
    { label: 'Total Materi', value: isLoading ? '…' : materials.length, Icon: FaBookOpen },
    { label: 'Kategori', value: isLoading ? '…' : categoryCount, Icon: FaLayerGroup },
    {
      label: 'Materi terbaru',
      value: isLoading ? '…' : recent[0] ? formatDate(recent[0].date) : '—',
      Icon: FaClock,
    },
  ]

  // Materi yang mau dihapus (buka dialog konfirmasi). null = dialog tertutup.
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
    <div className="flex min-h-svh flex-col">
      <AdminTopbar />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <h1 className="font-display text-3xl font-bold text-foam">Dashboard Admin</h1>
        <p className="mt-1 text-mist">Mau menambahkan apa hari ini?</p>

        {/* Statistik */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="brutal flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-line bg-surf text-foam">
                <s.Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-2xl font-bold text-foam">{s.value}</p>
                <p className="text-sm text-mist">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aksi cepat */}
        <h2 className="mt-10 text-sm font-bold uppercase tracking-wide text-mist">
          Aksi cepat
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {ACTIONS.map((a) =>
            a.to ? (
              <Link
                key={a.title}
                to={a.to}
                search={a.title == "Kelola Materi" && {admin: true}}
                className="group brutal brutal-press p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center border-2 border-line bg-surf text-foam">
                  <a.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 flex items-center gap-2 font-display text-lg font-bold text-foam">
                  {a.title}
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </h3>
                <p className="mt-1 text-sm text-mist">{a.desc}</p>
              </Link>
            ) : (
              <div
                key={a.title}
                className="border-2 border-dashed border-line bg-abyss p-6 opacity-70"
              >
                <div className="flex h-11 w-11 items-center justify-center border-2 border-line bg-abyss text-mist">
                  <a.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 flex items-center gap-2 font-display text-lg font-bold text-foam">
                  {a.title}
                  <span className="border-2 border-line bg-sun px-2 py-0.5 text-xs font-bold text-foam">
                    Segera
                  </span>
                </h3>
                <p className="mt-1 text-sm text-mist">{a.desc}</p>
              </div>
            ),
          )}
        </div>

        {/* Materi terbaru */}
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wide text-mist">
            Materi terbaru
          </h2>
          <Link
            to="/materials"
            search={{ admin: true }}
            className="text-xs font-bold text-foam underline-offset-4 hover:underline"
          >
            Lihat semua →
          </Link>
        </div>

        <div className="mt-4 overflow-hidden border-2 border-line shadow-brutal">
          {isLoading ? (
            <div className="space-y-px">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-14 animate-pulse bg-line/10" />
              ))}
            </div>
          ) : recent.length === 0 ? (
            <div className="flex flex-col items-center gap-3 bg-tide px-6 py-12 text-center">
              <FaBookOpen className="h-6 w-6 text-mist" />
              <p className="text-sm text-mist">
                Belum ada materi. Yuk tulis yang pertama.
              </p>
              <Link
                to="/admin/materials/new"
                className="text-sm font-bold text-foam underline-offset-4 hover:underline"
              >
                Tulis Materi →
              </Link>
            </div>
          ) : (
            recent.map((m) => (
              <div
                key={m.slug}
                className="flex items-center gap-4 border-b-2 border-line bg-tide px-5 py-3 last:border-b-0 hover:bg-surf/20"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-foam">{m.title}</p>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-mist">
                    <span className="border-2 border-line bg-surf px-2 py-0.5 font-bold text-foam">
                      {m.category}
                    </span>
                    <span>{formatDate(m.date)}</span>
                  </div>
                </div>
                {/* Slot aksi (aktif setelah endpoint edit/hapus siap) */}
                <div className="flex items-center gap-2 text-foam">
                  <Link
                    to="/materials/$slug"
                    params={{ slug: m.slug }}
                    search={{ admin: true }}
                    aria-label="Lihat materi"
                    className="border-2 border-line p-2 hover:bg-surf"
                  >
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/admin/materials/$id"
                    params={{ id: String(m.id) }}
                    aria-label="Edit materi"
                    className="border-2 border-line p-2 hover:bg-surf"
                  >
                    <FaPenToSquare className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    type="button"
                    aria-label="Hapus materi"
                    title="Hapus"
                    className="border-2 border-line p-2 hover:bg-red-400"
                    onClick={() => askDelete(m)}
                  >
                    <FaTrash className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

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
