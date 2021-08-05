import React from 'react'
import Link from 'next/link'
import Layout from '../../src/components/Layout'

export default function Contact () {
  return (
  <Layout>
  <div>
    <p>
    Se lo importante que es necesitar de alguien a quien puedas contarle tus pensamientos,
    dudas, ideas, inquietudes y es por esto que he reservado para ti todas las mañanas de mis
    fines de semana, por si quieres charlar sobre cualquier tematica, escoge el día y conversemos!
    </p>
    <div className="calendly-inline-widget calendly" data-url="https://calendly.com/siturra?hide_landing_page_details=1&hide_gdpr_banner=1"></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
  </div>
  </Layout>
  )
}
