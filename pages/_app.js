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
      <title>Allel Elektrokonsult AB</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
