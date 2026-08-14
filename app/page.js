import React from 'react'
import Layout from './components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import {
    SiUdemy,
    SiYoutube,
    SiGithub,
    SiLinkedin,
    SiMedium,
    SiInstagram,
    SiTiktok,
    SiAliexpress,
    SiRiotgames,
} from 'react-icons/si'

const ArrowIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
    </svg>
)

const MarketIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v13a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
    </svg>
)

const CardsIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="12" height="16" rx="2" transform="rotate(-8 9 13)" />
        <rect x="9" y="3" width="12" height="16" rx="2" transform="rotate(8 15 11)" />
    </svg>
)

const GraduationIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
)

const MailBurstIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="6" width="14" height="11" rx="2" />
        <path d="M3 8l7 5 7-5" />
        <path d="M20 4v2M22 7h-2M20 10v2" />
    </svg>
)

const GuideIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4.5A2.5 2.5 0 016.5 2H20v15H6.5A2.5 2.5 0 004 19.5z" />
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20v5H6.5A2.5 2.5 0 014 19.5z" />
        <path d="M8 7h8" />
        <path d="M8 11h5" />
    </svg>
)

const PokeballIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h6" />
        <path d="M15 12h6" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)

const projects = [
    {
        href: 'https://tcgmatch.com',
        title: 'TCGmatch',
        description: 'TCG Marketplace',
        Icon: MarketIcon,
        accent: '#0b94f5',
    },{
        href: 'https://apitcg.com',
        title: 'APITCG',
        description: 'Open Source TCG Database API',
        Icon: CardsIcon,
        accent: '#f59e0b',
    },
    {
        href: 'https://roadtohero.com',
        title: 'Road to Hero',
        description: 'Improve your competitive level',
        Icon: GraduationIcon,
        accent: '#ee3622',
    },
    {
        href: 'https://amisend.com',
        title: 'Amisend',
        description: 'Email for entrepreneurs',
        Icon: MailBurstIcon,
        accent: '#10b981',
    },
]

const socials = [
    {
        href: 'https://www.instagram.com/sebaiturravaldes',
        label: 'Instagram',
        Icon: SiInstagram,
        color: '#E1306C',
    },
    {
        href: 'https://www.tiktok.com/@sebaiturravaldes',
        label: 'TikTok',
        Icon: SiTiktok,
        color: '#ff2d55',
    },
    {
        href: 'https://www.linkedin.com/in/sebaiturravaldes',
        label: 'LinkedIn',
        Icon: SiLinkedin,
        color: '#0a66c2',
    },
    {
        href: 'https://github.com/sebaiturravaldes',
        label: 'GitHub',
        Icon: SiGithub,
        color: '#8b949e',
    },
]

const links = [
   
    {
        href: 'https://www.youtube.com/channel/UC_8SqULZ-a0rKmvxvAEJK0w?sub_confirmation=1',
        title: 'Canal de YouTube',
        description: '',
        Icon: SiYoutube,
        accent: '#ff0033',
        external: true,
    },
    {
        href: 'https://www.udemy.com/user/sebastian-iturra/',
        title: 'Cursos en Udemy',
        description: '',
        Icon: SiUdemy,
        accent: '#a435f0',
        external: true,
    },
    {
        href: 'https://medium.com/@sebaiturravaldes',
        title: 'Blog en Medium',
        description: 'Artículos sobre tech, carrera y vida',
        Icon: SiMedium,
        accent: '#e5e7eb',
        external: true,
    },
     {
        href: 'https://www.roadtohero.com/sebaiturravaldes',
        title: 'Mis guías publicadas',
        description: 'Guías competitivas en Road to Hero',
        Icon: GuideIcon,
        accent: '#ee3622',
        external: true,
    }
]

const games = [
    {
        href: 'https://eloshowdown.com/riftbound/player/53563/season-4-vendetta/',
        title: 'Elo Showdown',
        game: 'Riftbound',
        Icon: SiRiotgames,
        accent: '#d13639',
    },
    {
        href: 'https://limitlesstcg.com/players/5911',
        title: 'Limitless',
        game: 'Pokémon TCG',
        Icon: PokeballIcon,
        accent: '#ffcb05',
    },
]

export default function Home() {
    return (
        <Layout home>
            <div className="bg-orbs" aria-hidden="true">
                <span className="orb orb-1" />
                <span className="orb orb-2" />
                <span className="orb orb-3" />
            </div>

            <div className="container">
                <section className="hero">
                    <div className="avatar-wrap">
                        <Link href="/" aria-label="Inicio">
                            <Image
                                priority
                                src="https://avatars.githubusercontent.com/u/11622941?v=4"
                                className="avatar"
                                height={160}
                                width={160}
                                alt="Sebastián Iturra"
                            />
                        </Link>
                        <span className="status-dot" aria-hidden="true" />
                    </div>

                    <h1 className="name">Sebastián Iturra</h1>
                    <p className="handle">@sebaiturravaldes</p>
                    <p className="tagline">
                        Construyendo y compartiendo.
                    </p>

                    <nav className="social-media" aria-label="Redes sociales">
                        {socials.map(({ href, label, Icon, color }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="social-pill"
                                style={{ '--accent': color }}
                            >
                                <Icon className="social-icon" />
                            </a>
                        ))}
                    </nav>
                </section>

                <section className="links" aria-label="Enlaces destacados">
                    <h2 className="section-title">Enlaces</h2>
                    <div className="links-list">
                    {links.map(({ href, title, description, Icon, accent, external }) => {
                        const commonProps = {
                            className: 'link-card',
                            style: { '--accent': accent },
                        }
                        const inner = (
                            <>
                                <span className="link-icon" aria-hidden="true">
                                    <Icon />
                                </span>
                                <span className="link-text">
                                    <span className="link-title">{title}</span>
                                    <span className="link-desc">{description}</span>
                                </span>
                                <span className="link-arrow" aria-hidden="true">
                                    <ArrowIcon />
                                </span>
                            </>
                        )
                        return external ? (
                            <a
                                key={title}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                {...commonProps}
                            >
                                {inner}
                            </a>
                        ) : (
                            <Link key={title} href={href} {...commonProps}>
                                {inner}
                            </Link>
                        )
                    })}
                    </div>
                </section>

                <section className="projects" aria-label="Proyectos">
                    <h2 className="section-title">Proyectos</h2>
                    <div className="project-grid">
                        {projects.map(({ href, title, description, Icon, accent }) => (
                            <a
                                key={title}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="project-card"
                                style={{ '--accent': accent }}
                            >
                                <span className="project-icon" aria-hidden="true">
                                    <Icon />
                                </span>
                                <span className="project-text">
                                    <span className="project-title">{title}</span>
                                    <span className="project-desc">{description}</span>
                                </span>
                                <span className="link-arrow" aria-hidden="true">
                                    <ArrowIcon />
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="games" aria-label="Competitivo">
                    <h2 className="section-title">Competitivo</h2>
                    <div className="game-grid">
                        {games.map(({ href, title, game, Icon, accent }) => (
                            <a
                                key={title}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="game-card"
                                style={{ '--accent': accent }}
                            >
                                <span className="game-head">
                                    <span className="game-icon" aria-hidden="true">
                                        <Icon />
                                    </span>
                                    <span className="game-text">
                                        <span className="game-title">{title}</span>
                                        <span className="game-game">{game}</span>
                                    </span>
                                    <span className="link-arrow" aria-hidden="true">
                                        <ArrowIcon />
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    )
}
