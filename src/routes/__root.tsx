import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { MainLayout } from '@/components/templates/MainLayout'

const RootLayout = () => (
  <MainLayout>
    <Outlet />
    <TanStackRouterDevtools />
  </MainLayout>
)

export const Route = createRootRoute({ component: RootLayout })
