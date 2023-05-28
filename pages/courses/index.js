import React from 'react'
import Head from 'next/head'
import Layout from '../../app/components/Layout'
import Card from '../../app/components/Card'

export default function Courses() {
  return (
    <Layout>
      <Head>
        <title>Cursos - Sebastián Iturra</title>
      </Head>
      <div className="container">
        <h2>Hola, he comenzado en Udemy</h2>
        <p className="justify">
          A continuación te dejo el listado de todos los cursos que he lanzado.
        </p>
        <div className="mt-50">
          <Card
            image="https://img-c.udemycdn.com/course/480x270/4161148_c379_3.jpg"
            href="https://www.udemy.com/course/crear-extensiones-con-visual-studio-code"
            title="Crear extensión en Visual Studio Code"
            description="Aprenderás a crear tu primera extensión y así comenzar a automatizar las tareas repetitivas que haces y no te das cuenta."
          />
        </div>
      </div>
    </Layout>
  )
}
