import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import {  SiGithub, SiLinkedin, SiInstagram, SiTiktok } from 'react-icons/si'
import styles from './index.module.css'

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
            <div className={styles.container}>
                <section>
                    <h2 align="center">Sebastián Iturra</h2>
                    <p align="center">@sebaiturravaldes</p>
                </section>
                <section className={styles.sorteo}>
                    <div>
                        <h1>Sorteo mes de Junio</h1>
                        <p>Hemos tomado la decisión de comenzar a sortear lo que vamos abriendo dentro de los unboxings, te recomiendo ver el video que se muestra a continuación para conocer el contenido que se sorteará, el premio a sortear variará mes a mes.</p>
                    </div>
                    <div>
                        <iframe className={styles.iframe} src="https://www.youtube.com/embed/kWLfcGAaUKA" title="Sorteamos Eternatus al Abrir la ETB de Darkness Ablaze de Pokémon Sword &amp; Shield" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <h1>Reglas del sorteo</h1>
                        Debido a que estamos comenzando, se nos imposibilita enviar productos fuera de Chile, por ende solo podrán participar personas que vivan dentro de Chile, se espera que esta restricción se quite en el futuro.
                        A continuación, se presentan las reglas necesarias para participar en el sorteo.
                        <ul>
                            <li>Despacho disponible solo para personas que viven en Chile 🇨🇱</li>
                            <li>Estar subscrito al canal <a href="https://www.youtube.com/@sebaiturravaldes" target="_blank">https://www.youtube.com/@sebaiturravaldes</a></li>
                            <li>Comentar el video de arriba 👆🏼</li>
                            <li>Dar like al video 👆🏼</li>
                        </ul>
                        <h1>Fecha del sorteo</h1>
                        <p>Se realizará en vivo a través de la plataforma Twitch, será el sábado 24 de Julio a las 21:00 horas Chile por el canal 👉🏼 <a href="https://www.twitch.tv/sebaiturravaldes" target="_blank">https://twitch.tv/sebaiturravaldes</a></p>
                </section>
                </div>
        </Layout>
    )
}
