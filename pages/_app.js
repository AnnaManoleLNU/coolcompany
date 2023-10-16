import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

/**
 * The app.
 *
 * @param {object} Component - The component.
 * @param {object} Component.Component - The component.
 * @param {object} Component.pageProps - The page props.
 *
 * @returns {HTMLElement} - The app.
 */
export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/images/favicon-filled.png" />
        <title>Allel Elektrokonsult AB</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
