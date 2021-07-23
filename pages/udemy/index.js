import React from 'react'
import Head from 'next/head'
import Layout from '../../src/components/Layout'

export default function index () {
  return (
    <Layout>
      <Head>
        <title>Udemy</title>
      </Head>
      <h1>Hola, he comenzado en Udemy</h1>
      <p className="justify">A continuación te dejo el enlace a mi perfil, en donde podrás encontrar
      todos los cursos que iré desarrollando.</p>
      <p className="justify"><a href="https://www.udemy.com/user/sebastian-iturra">Ver perfil en Udemy</a></p>
    </Layout>
  )
}
