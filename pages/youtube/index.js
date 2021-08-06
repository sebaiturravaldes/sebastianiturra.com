import React from 'react'
import Head from 'next/head'
import Layout from '../../src/components/Layout'
import Image from 'next/image'

export default function Youtube() {
  return (
    <Layout>
      <Head>
        <title>Youtube</title>
      </Head>
      <h1>Hola, he comenzado en youtube</h1>
      <p className="justify">
        Me compré este micrófono y comencé a grabar, previamente había realizado grabaciones, pero
        el audio se escuchaba pésimo, necesitaba mejorar al menos ese aspecto para poder grabar
        videos con mejor calidad en audio, luego vendría la etapa de mejorar la calidad de la
        grabación, así que mi primera inversión fue este micrófono.
      </p>
      <Image
        src="/assets/images/microfono.jpeg"
        alt="Picture of the author"
        width={200}
        height={300}
      />
      <p className="justify">
        A continuación te dejo el link de mi canal en donde trataré de subir videos más explicativos
        y cada vez con mejor producción.
      </p>
      <p className="justify">Para demostrar al mundo, que Nunca es tarde para aprender.</p>
      <p className="justify">
        <a href="https://www.youtube.com/channel/UC_8SqULZ-a0rKmvxvAEJK0w">Ir al canal</a>
      </p>
    </Layout>
  )
}
