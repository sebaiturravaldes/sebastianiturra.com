import React from 'react'
import Head from 'next/head'
import Layout from '../../src/components/Layout'
import Link from 'next/link'

export default function Posts () {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Link href="posts/first">First Post</Link>
    </Layout>
  )
}
