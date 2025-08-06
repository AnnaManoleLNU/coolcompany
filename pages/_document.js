import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Document.
 *
 * @returns {HTMLElement} - Document.
 */
export default function Document () {
  return (
    <Html lang="sv">
      <meta name="dittföretag" content="Ditt företag AB" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;700;900&family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
