import React from 'react'
import Head from 'next/head'
import Layout from '../../src/components/Layout'

export default function Courses() {
  return (
    <Layout>
      <Head>
        <title>Cursos - Sebastián Iturra</title>
      </Head>
      <div className="container">
        <h2>Hola, he comenzado en Udemy</h2>
        <p className="justify">
          A continuación te dejo el enlace a mi perfil, en donde podrás encontrar todos los cursos
          que iré desarrollando.
        </p>
        <p className="justify">
          <a href="https://www.udemy.com/user/sebastian-iturra">Ver perfil en Udemy</a>
        </p>
      </div>
    </Layout>
  )
}
