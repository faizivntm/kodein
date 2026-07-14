import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { MainLayout } from '@/components/templates/MainLayout'

const RootLayout = () => (
  <MainLayout>
    <Outlet />
    <TanStackRouterDevtools />
  </MainLayout>
)

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: 'koDein — Software Engineer',
      },
      {
        name: 'description',
        content:
          'Dokumentasi belajar & coding. Tempat nyatet hal fundamental pemrograman, sekaligus etalase karya yang pernah dibangun.',
      },
    ],
  }),
  component: RootLayout,
})
