import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import {  SiGithub, SiLinkedin, SiInstagram, SiTiktok } from 'react-icons/si'

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
                <section className="avatar">
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
                </section>
                <section className="social-media">
                        Página en construcción...
                </section>
            </div>
        </Layout>
    )
}
