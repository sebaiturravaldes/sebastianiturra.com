import React from 'react'
import Head from 'next/head'
import Layout from '../../src/components/Layout'

export default function First() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="container">
        <h1>First Post</h1>
        <p>⛏ en construcción… </p>
        <p>Trataremos de partir del blog siempre con una imagen...</p>
      </div>
    </Layout>
  )
}
