import "./globals.css"

export const metadata = {
  title: "Happy Birthday, Debankita",
  description: "A small moment, just for you.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className="relative bg-linear-to-br from-[#fff7f4] via-[#fffefe] to-[#fff2f2] dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 text-stone-800 dark:text-stone-100 overflow-x-hidden antialiased">
        <div className="noise" />
        {children}
      </body>
    </html>
  )
}
