import React from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import PropTypes from 'prop-types'
import Back from './Back'
import Logo from './Logo'
import Footer from './Footer'

const name = 'Sebastián Iturra'
export const siteTitle = 'siturra ~ Personal Web Site'
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
      </Head>

      <header className={styles.header}>
        <Logo name={name} />
      </header>

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
