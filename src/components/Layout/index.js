import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../../../styles/utils.module.css'
import Link from 'next/link'
import PropTypes from 'prop-types'

const name = 'Sebastián Iturra'
export const siteTitle = 'siturra ~ Personal Blog'

export default function Layout ({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal blog Sebastián Iturra"
        />
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
        {home
          ? (
          <div className={styles.logo}>
            {name}
          </div>
            )
          : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="https://avatars.githubusercontent.com/u/11622941?v=4"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
            )}
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
        <p>
          Nunca es tarde
        </p>
        <p>
          ❤️
        </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool
}
