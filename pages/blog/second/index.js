import React from 'react'
import Head from 'next/head'
import Layout from '../../../src/app/components/Layout'

export default function Second() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <div className="container">
        <h1>Complejidad Ciclomática vs Complejidad Cognitiva</h1>
        <p>⛏ en construcción… </p>
        <p>
          Hoy hablaremos sobre la dos complejidades de nuestro software, a las que nos vemos
          enfrentados de una u otra forma en el tiempo. La Compejidad Ciclomática y la Complejidad
          Cognitiva.
        </p>
        <p></p>
      </div>
    </Layout>
  )
}
