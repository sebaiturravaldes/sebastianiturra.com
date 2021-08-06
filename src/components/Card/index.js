import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Card({ image, href, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} width="100%" alt={title} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <p className="text-center">
          <Link href={href}>
            <a target="_blank" rel="noreferrer" className="button">
              Ir al curso
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}
