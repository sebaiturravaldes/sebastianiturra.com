import React from 'react'
import Link from 'next/link'
import styles from '../layout.module.css'

export default function Back() {
  return (
    <div className={styles.backToHome}>
      <Link href="/">← Volver</Link>
    </div>
  )
}
