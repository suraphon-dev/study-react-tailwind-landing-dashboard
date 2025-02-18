import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import Company from '@/pages/Company'
import Legal from '@/pages/Legal'
import Policy from '@/pages/Policy'
import Pricing from '@/pages/Pricing'
import Terms from '@/pages/Terms'
import Login from '@/pages/Login'
import Forgotpassword from '@/pages/Forgotpassword'
import Register from '@/pages/Register'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import DashboardLayout from '@/layouts/DashboardLayout'
import Calendar from '@/pages/dashboard/Calendar'
import Dashboard from '@/pages/dashboard/Dashboard'
import Documents from '@/pages/dashboard/Documents'
import Profile from '@/pages/dashboard/Profile'
import Projects from '@/pages/dashboard/Projects'
import Reports from '@/pages/dashboard/Reports'
import Settings from '@/pages/dashboard/Settings'
import Team from '@/pages/dashboard/Team'

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <Home />
         },
         {
            path: '/pricing',
            element: <Pricing />
         },
         {
            path: '/company',
            element: <Company />
         },
         {
            path: '/blog',
            element: <Blog />
         },
         {
            path: '/terms',
            element: <Terms />
         },
         {
            path: '/privacy',
            element: <Policy />
         },
         {
            path: '/legal',
            element: <Legal />
         }
      ]
   },
   {
      // Without Layout
      path: '/login',
      element: <Login />
   },
   {
      // Without Layout
      path: '/register',
      element: <Register />
   },
   {
      // Without Layout
      path: '/forgotpassword',
      element: <Forgotpassword />
   },
   {
      // Dashboard Layout
      path: '/dashboard',
      // Main Layout
      element: <DashboardLayout />,
      children: [
         {
            index: true,
            element: <Dashboard />
         },
         {
            path: '/dashboard/team',
            element: <Team />
         },
         {
            path: '/dashboard/projects',
            element: <Projects />
         },
         {
            path: '/dashboard/calendar',
            element: <Calendar />
         },
         {
            path: '/dashboard/documents',
            element: <Documents />
         },
         {
            path: '/dashboard/reports',
            element: <Reports />
         },
         {
            path: '/dashboard/settings',
            element: <Settings />
         },
         {
            path: '/dashboard/profile',
            element: <Profile />
         }
      ]
   }
])

export function AppRouter() {
   return (
      <ThemeProvider>
         <RouterProvider router={router} />
      </ThemeProvider>
   )
}
