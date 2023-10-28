import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CustomHeader from './components/header'
import './globals.css'
import { Layout } from 'antd'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CMS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout className='layout'>
          <CustomHeader />
          {children}
        </Layout>
      </body>
    </html>
  )
}