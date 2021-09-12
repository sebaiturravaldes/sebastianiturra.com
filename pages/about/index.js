import React from 'react'
import Head from 'next/head'
import Layout from '../../src/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { SiUdemy, SiFacebook, SiYoutube, SiGithub, SiLinkedin } from 'react-icons/si'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Acerca de Sebastián Iturra</title>
      </Head>
      <div className="container">
        <section className="text-center">
          <Link href="/">
            <Image
              priority
              src="https://avatars.githubusercontent.com/u/11622941?v=4"
              className="borderCircle"
              height={238}
              width={238}
              alt="Sebastián Iturra"
            />
          </Link>
        </section>
        <section>
          <h2>Acerca de mi</h2>
          <p className="abstract">
            [Hola ser vivo!, mi nombre es Sebastián Iturra, actualmente vivo en Santiago de Chile,
            tengo veintiseis(26) años, soy padre y comencé en esto hace muuuuuuuuuuuuuuchos años...
            sin nada más que escribir por ahora, te doy la bienvenida a este sitio web, espero lo
            disfrutes, acá iré dejando parte de la historia, mis vivencias y espero te sirva de
            algo.]
          </p>
        </section>
        <section className="social-media">
          <Link href="https://www.udemy.com/user/sebastian-iturra/">
            <a target="_blank" rel="noreferrer">
              <SiUdemy className="icon-udemy" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/sebastianiturravaldes/">
            <a target="_blank" rel="noreferrer">
              <SiFacebook className="icon-facebook" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UC_8SqULZ-a0rKmvxvAEJK0w?sub_confirmation=1">
            <a target="_blank" rel="noreferrer">
              <SiYoutube className="icon-youtube" />
            </a>
          </Link>
          <Link href="https://github.com/siturra">
            <a target="_blank" rel="noreferrer">
              <SiGithub className="icon-github" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/sebastianiturra">
            <a target="_blank" rel="noreferrer">
              <SiLinkedin className="icon-linkedin" />
            </a>
          </Link>
        </section>
      </div>
    </Layout>
  )
}
