import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'

export const metadata = {
  title: 'PIAIC Website',
  description: 'PIAIC Website by Zaka Urrehman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <Navbar/>
        {children}
        <Footer/>
      
      </body>
    </html>
  )
}
