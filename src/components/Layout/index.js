import React from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import PropTypes from 'prop-types'

const name = 'Sebastián Iturra'
export const siteTitle = 'siturra ~ Personal Web Site'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal blog Sebastián Iturra" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">{name}</Link>
        </div>
      </header>
      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Volver</a>
          </Link>
        </div>
      )}

      <footer>
        <p>Nunca es tarde</p>
        <p>❤️</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool
}
