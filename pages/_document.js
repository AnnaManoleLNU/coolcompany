import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Document.
 *
 * @returns {HTMLElement} - Document.
 */
export default function Document () {
  return (
    <Html lang="sv">
      <Head>
        <link rel='shortcut icon' href='/favicon-filled.png' />
        <meta name="allel" content="Allel Elektrokonsult AB" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;700;900&family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
