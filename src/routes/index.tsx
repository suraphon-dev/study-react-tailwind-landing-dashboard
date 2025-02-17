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
   }
])

export function AppRouter() {
   return (
      <ThemeProvider>
         <RouterProvider router={router} />
      </ThemeProvider>
   )
}
