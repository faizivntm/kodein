import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { AdminTopbar } from '@/components/organisms/AdminTopbar'
import { MaterialForm } from '@/components/organisms/MaterialForm'
import { useMaterials } from '@/api/materials/useMaterials'

export const Route = createFileRoute('/admin/materials/$id')({
  beforeLoad: () => {
    if (!localStorage.getItem('token')) {
      throw redirect({ to: '/admin/login' })
    }
  },
  component: EditMaterial,
})

function EditMaterial() {
  const { id } = Route.useParams()
  const { data, isLoading, isError } = useMaterials()
  const material = data?.find((m) => String(m.id) === id)

  if (isLoading) {
    return (
      <>
        <AdminTopbar />
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center text-mist">
          Memuat materi…
        </div>
      </>
    )
  }

  if (isError || !material) {
    return (
      <>
        <AdminTopbar />
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
          <p className="text-mist">
            {isError ? 'Gagal memuat materi.' : 'Materi tidak ditemukan.'}
          </p>
          <Link
            to="/admin/create_materi"
            className="mt-4 inline-block text-sm font-bold text-foam underline-offset-4 hover:underline"
          >
            ← Dashboard
          </Link>
        </div>
      </>
    )
  }

  // key: remount form kalau pindah antar materi (state form di-seed dari initial).
  return <MaterialForm key={material.id} initial={material} />
}
