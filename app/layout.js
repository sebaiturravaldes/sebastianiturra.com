import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sebastián Iturra ~ Personal Web Site',
  description: 'Sitio Web Personal de Sebastián Iturra',
  'theme-color': '#171819',
  openGraph: {
    title: 'Sebastián Iturra ~ Personal Web Site',
    image: 'https://avatars.githubusercontent.com/u/11622941?v=4',
    type: 'website',
    url: 'https://sebastianiturra.com/',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-5TX6BW2YQ9`}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-5TX6BW2YQ9', {
page_path: window.location.pathname,
});
`
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
