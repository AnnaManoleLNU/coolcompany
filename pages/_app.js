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
        <title>CMS Company Website</title>
        <meta name="description" content="A CMS-driven company website built with Next.js, Tailwind CSS, and Sanity. Features include easy content management, SEO optimization, and a modern tech stack." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="CMS, Next.js, Tailwind CSS, Sanity, SEO, JAMstack" />
        <meta name="author" content="Anna Manole" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
