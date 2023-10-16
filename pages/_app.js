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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Elkonsult, stockholm, projektering, elritningar, elingenjör, förfrågningsunderlag, bygghandlingar,elbesiktning, rambeskrivning"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
