import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../src/components/Layout'

export default function FirstPost () {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>⛏ en construcción…  </p>
      <p>Trataremos de partir del blog siempre con una imagen...</p>
    </Layout>
  )
}
