export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-layout">
          <main className="min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}