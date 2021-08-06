import React from 'react'
import Layout from '../../src/components/Layout'
import styles from './styles.module.css'

export default function Contact() {
  return (
    <Layout>
      <div className="container">
        <p>
          Se lo importante que es necesitar de alguien a quien puedas contarle tus pensamientos,
          dudas, ideas, inquietudes y es por esto que he reservado para ti todas las mañanas de mis
          fines de semana, por si quieres charlar sobre cualquier tematica, escoge el día y
          conversemos!
        </p>
        <iframe
          src="https://calendly.com/siturra?hide_landing_page_details=1&hide_gdpr_banner=1"
          className={styles.calendly}></iframe>
      </div>
    </Layout>
  )
}
