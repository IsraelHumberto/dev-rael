import './globals.css'
import { Hind, Montserrat } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600'] })
const hind = Hind({ subsets: ['latin'], weight: ['300', '400', '600'] })


export const metadata = {
  title: 'Portfolio - Dev Rael',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} ${hind.className} bg-primary-600`}>{children}</body>
    </html>
  )
}
