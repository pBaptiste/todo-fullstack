import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import ThemeProvider from '@/context/theme-provider'
import FilterProvider from '@/context/filter-provider'
import LoadingProvider from '@/context/loading-provider'

const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To Do App',
  description: 'A simple to-do app with drag and drop functionality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefin_sans.className}>
        <LoadingProvider>
          <ThemeProvider>
            <FilterProvider>
              {children}
            </FilterProvider>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}
