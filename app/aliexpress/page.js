import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { SiGithub, SiLinkedin, SiInstagram, SiTiktok } from 'react-icons/si'

const items = [
    {
        title: '#5 Protectores Dragon Shield',
        link: 'https://s.click.aliexpress.com/e/_DE2aubJ'
    }, {
        title: '#4 Estuche para juegos Nintendo Switch 24 en 1',
        link: 'https://s.click.aliexpress.com/e/_DmBlUkV'
    },
    {
        title: '#3 Protectores color Turquesa para TCG',
        link: 'https://es.aliexpress.com/item/1005005069413565.html?spm=a2g0o.order_detail.order_detail_item.4.265639d3j01oN4&gatewayAdapt=glo2esp'
    },
    {
        title: '#2 Soporte para teléfono',
        link: 'https://s.click.aliexpress.com/e/_DeghAqh'
    },
    {
        title: '#1 Soporte juegos Switch',
        link: 'https://s.click.aliexpress.com/e/_Dn0AOzB'
    }
]

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
                    {/* <p className="abstract">
                        [Hola soy Sebastián Iturra, actualmente vivo en Santiago de Chile,
                        tengo veintisiete(27) años, soy padre y comencé en esto a los once(11) años,
                        te doy la bienvenida a este sitio, donde iré dejando parte de mi historia,
                        vivencias y espero te sirvan de algo.]
                    </p> */}
                </section>
                <section className="social-media">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sebaiturravaldes">
                        <SiInstagram className="icon-instagram" />
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@sebaiturravaldes">
                        <SiTiktok className="icon-tiktok" />
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sebaiturravaldes">
                        <SiLinkedin className="icon-linkedin" />
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://github.com/sebaiturravaldes">
                        <SiGithub className="icon-github" />
                    </a>
                </section>
                <section className="action-buttons">
                    {items.map((item, index) => (
                        <a key={index} className="action-button aliexpress" target='_blank' rel="noreferrer" href={item.link}>
                            {item.title}
                        </a>
                    ))}
                </section>
            </div>
        </Layout>
    )
}
