import Sidebar from '@/components/shared/dashboard/Sidebar'
import TopBar from '@/components/shared/dashboard/TopBar'
import { Outlet } from 'react-router'

export default function DashboardLayout() {
   return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
         <Sidebar />
         <div className="flex flex-col flex-1 overflow-hidden">
            <TopBar />
            <main className="flex-1 overflow-y-auto p-4">
               <Outlet />
            </main>
         </div>
      </div>
   )
}
