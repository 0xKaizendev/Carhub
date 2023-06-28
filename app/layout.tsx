import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, Footer,Analytics } from '@/components'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Hub',
  description: `Discover the world's most exceptional cars`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
