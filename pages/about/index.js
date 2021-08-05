import React from 'react'
import Head from 'next/head'
import Layout from '../../src/components/Layout'
import utilStyles from '../../styles/utils.module.css'

export default function About () {
  return (
    <Layout>
      <Head>
        <title>Acerca de Sebastián Iturra</title>
      </Head>
        <section>
        <p className={utilStyles.abstract}>
        [Hola ser vivo!, mi nombre es Sebastián Iturra, actualmente vivo en Santiago de Chile,
        tengo veintiseis(26) años, soy padre y comencé en esto hace muuuuuuuuuuuuuuchos años...
        sin nada más que escribir por ahora, te doy la bienvenida a este sitio web, espero lo disfrutes,
        acá iré dejando parte de la historia, mis vivencias y espero te sirva de algo.]
        </p>
      </section>
      <footer>
        <p>
          (Este blog esta desarrollado con <a href="https://nextjs.org/learn">NextJS</a>)
        </p>
        <p>
          Código fuente de este blog: <a href="https://github.com/siturra/sebastianiturra.com">https://github.com/siturra/sebastianiturra.com</a>
        </p>
      </footer>
    </Layout>
  )
}
