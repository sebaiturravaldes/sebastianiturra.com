import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../src/components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyles.abstract}>
          [Hola ser vivo!, mi nombre es Sebastián Iturra, actualmente vivo en Santiago de Chile,
          tengo veintiseis(26) años, soy padre y comencé en esto hace muuuuuuuuuuuuuuchos años...
          sin nada más que escribir por ahora, te doy la bienvenida a nuestro blog, acá iré dejando parte de la historia,
          mis vivencias y espero te sirva de algo.]
          </p>
        <p>
          <Link href="posts">[Blog]</Link>-
          <Link href="youtube">[Youtube]</Link>
          </p>
      </section>
      <footer>
        <p>
          (Este blog esta desarrollado con NextJS,{' '}
          <a href="https://nextjs.org/learn">aprende Next.js</a>.)
        </p>
        <p>
          Código fuente de este blog: <a href="https://github.com/siturra/sebastianiturra.com">https://github.com/siturra/sebastianiturra.com</a>
        </p>
      </footer>
    </Layout>
  )
}
