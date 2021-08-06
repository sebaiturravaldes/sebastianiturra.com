import React from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import PropTypes from 'prop-types'
import Back from './Back'
import Logo from './Logo'
import Footer from './Footer'

const name = 'Sebastián Iturra'
export const siteTitle = 'siturra ~ Personal Web Site'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal blog Sebastián Iturra" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/11622941?v=4" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
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
