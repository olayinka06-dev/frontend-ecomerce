import './globals.css'
import { Kumbh_Sans } from 'next/font/google'

const kumbh_Sans = Kumbh_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh_Sans.className}>{children}</body>
    </html>
  )
}
