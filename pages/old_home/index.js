import React from 'react'
import Link from 'next/link'
import Layout from '../../app/components/Layout'
import styles from './styles.module.css'

export default function home() {
  return (
    <Layout home>
      <section className={styles.content}>
        <Link href="https://medium.com/@sebastianiturra">Blog</Link>
        <Link href="/courses">Cursos</Link>
        <Link href="/about">Acerca de</Link>
      </section>
    </Layout>
  )
}
