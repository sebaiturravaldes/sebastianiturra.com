import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../src/components/Layout'
import styles from './styles.module.css'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.content}>
        <Link href="/posts">Blog</Link>
        <Link href="/courses">Cursos</Link>
        <Link href="/contact">Conversemos</Link>
        <Link href="/about">Acerca de</Link>
      </section>
    </Layout>
  )
}
