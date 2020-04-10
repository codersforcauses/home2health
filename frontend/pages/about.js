import Link from 'next/link'
import SEO from '../components/SEO'

import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <SEO title={`Home2Health - About`}></SEO>
      <p>Welcome to /about</p>
    </Layout>
  )
}
