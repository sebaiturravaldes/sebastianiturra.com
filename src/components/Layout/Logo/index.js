import React from 'react'
import Link from 'next/link'
import styles from '../layout.module.css'
import PropTypes from 'prop-types'

export default function Logo({ name }) {
  return (
    <div className={styles.logo}>
      <Link href="/">{name}</Link>
    </div>
  )
}

Logo.propTypes = {
  name: PropTypes.string
}
