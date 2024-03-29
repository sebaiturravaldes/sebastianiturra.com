import React from 'react'
import Head from 'next/head'
import Layout from '../../app/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { SiUdemy, SiYoutube, SiGithub, SiLinkedin, SiMedium, SiInstagram, SiTiktok } from 'react-icons/si'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>Sebastián Iturra</title>
                <meta
                    name="description"
                    content="Sitio web de sebaiturravaldes"
                    key="desc"
                />
                <meta property="og:title" content="Sebastián Iturra Valdés" />
                <meta
                    property="og:description"
                    content="Sitio web de sebaiturravaldes"
                />
            </Head>
            <div className="container">
                <section className="text-center">
                    <Link href="/">
                        <Image
                            priority
                            src="https://avatars.githubusercontent.com/u/11622941?v=4"
                            className="borderCircle"
                            height={180}
                            width={180}
                            alt="Sebastián Iturra"
                        />
                    </Link>
                </section>
                <section>
                    <h2 align="center">Sebastián Iturra</h2>
                    <p align="center">@sebaiturravaldes</p>
                    {/* <p className="abstract">
                        [Hola soy Sebastián Iturra, actualmente vivo en Santiago de Chile,
                        tengo veintisiete(27) años, soy padre y comencé en esto a los once(11) años,
                        te doy la bienvenida a este sitio, donde iré dejando parte de mi historia,
                        vivencias y espero te sirvan de algo.]
                    </p> */}
                </section>
                <section className="social-media">
                    <Link href="https://www.instagram.com/sebaiturravaldes">
                        <a target="_blank" rel="noreferrer">
                            <SiInstagram className="icon-instagram" />
                        </a>
                    </Link>

                    <Link href="https://www.tiktok.com/@sebaiturravaldes">
                        <a target="_blank" rel="noreferrer">
                            <SiTiktok className="icon-tiktok" />
                        </a>
                    </Link>

                    {/* <Link href="https://www.facebook.com/sebaiturravaldes/">
                        <a target="_blank" rel="noreferrer">
                            <SiFacebook className="icon-facebook" />
                        </a>
                    </Link> */}

                    <Link href="https://www.linkedin.com/in/sebaiturravaldes">
                        <a target="_blank" rel="noreferrer">
                            <SiLinkedin className="icon-linkedin" />
                        </a>
                    </Link>

                    <Link href="https://github.com/sebaiturravaldes">
                        <a target="_blank" rel="noreferrer">
                            <SiGithub className="icon-github" />
                        </a>
                    </Link>
                </section>
                <section className="action-buttons">
                    <Link href="https://www.youtube.com/channel/UC_8SqULZ-a0rKmvxvAEJK0w?sub_confirmation=1">
                        <a target="_blank" className="action-button youtube" rel="noreferrer">
                            <SiYoutube className="icon" />
                            Youtube
                        </a>
                    </Link>
                    <Link href="https://www.udemy.com/user/sebastian-iturra/">
                        <a target="_blank" className="action-button udemy" rel="noreferrer">
                            <SiUdemy className="icon" />
                            Cursos en Udemy
                        </a>
                    </Link>
                    <Link href="https://medium.com/@sebaiturravaldes">
                        <a target="_blank" className="action-button blog" rel="noreferrer">
                            <SiMedium className="icon" />
                            Blog
                        </a>
                    </Link>
                </section>
            </div>
        </Layout>
    )
}
