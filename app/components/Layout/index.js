import React from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import PropTypes from 'prop-types'
import Back from './Back'
import Footer from './Footer'
import Script from 'next/script'

const name = 'Sebastián Iturra'
export const siteTitle = 'Sebastián Iturra ~ Personal Web Site'
export const siteDescription = 'Sitio Web Personal de Sebastián Iturra'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal blog Sebastián Iturra" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/11622941?v=4" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#171819" />
        <meta name="description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sebastianiturra.com/" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />

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
      </Head>

      <main>{children}</main>

      {!home ? <Back /> : null}

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool
}
