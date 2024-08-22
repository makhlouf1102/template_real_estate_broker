import React from "react"

export default function ManageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="manage-layout">
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  )
}