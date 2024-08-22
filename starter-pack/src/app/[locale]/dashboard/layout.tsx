import { NextUIProvider } from "@nextui-org/react"
import Sidebar from "./components/ui/sidebar"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <Sidebar />
          <div className="dashboard-layout">
            <main className="min-h-screen">
              {children}
            </main>
          </div>
        </NextUIProvider>
      </body>
    </html>
  )
}