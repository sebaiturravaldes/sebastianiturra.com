import React from 'react'
import styles from './layout.module.css'
import PropTypes from 'prop-types'
import Back from './Back'
import Footer from './Footer'

const name = 'Sebastián Iturra'
export const siteTitle = 'Sebastián Iturra ~ Personal Web Site'
export const siteDescription = 'Sitio Web Personal de Sebastián Iturra'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>

      <main>{children}</main>

      {!home ? <Back /> : null}

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool
}
