import { NextUIProvider } from "@nextui-org/react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
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