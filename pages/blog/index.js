import React from 'react'
import Head from 'next/head'
import Layout from '../../src/app/components/Layout'
import Link from 'next/link'

export default function Posts() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="container">
        <h2>Blog</h2>

        <Link href="blog/first">
          <h3>First Post</h3>
        </Link>
        <Link href="blog/second">
          <h3>Complejidad Ciclomática vs Complejidad Cognitiva</h3>
        </Link>
      </div>
    </Layout>
  )
}
