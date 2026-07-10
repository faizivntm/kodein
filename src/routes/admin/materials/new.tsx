import { createFileRoute, redirect } from '@tanstack/react-router'
import { MaterialForm } from '@/components/organisms/MaterialForm'

export const Route = createFileRoute('/admin/materials/new')({
  beforeLoad: () => {
    if (!localStorage.getItem('token')) {
      throw redirect({ to: '/admin/login' })
    }
  },
  component: () => <MaterialForm />,
})
