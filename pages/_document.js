import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Document.
 *
 * @returns {HTMLElement} - Document.
 */
export default function Document () {
  return (
    <Html lang="sv">
      <meta name="allel" content="Allel Elektrokonsult AB" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;700;900&family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="Elkonsult, stockholm, projektering, elritningar, elingenjör, förfrågningsunderlag, bygghandlingar,elbesiktning, rambeskrivning"></meta>
      <meta name="description" content="Allel Elektrokonsult AB är en kostnadseffektiv el-konsult i Stockholm med anor sedan 1968. Vi utför elprojektering, elritningar, elbesiktning, rambeskrivning, förfrågningsunderlag och bygghandlingar."></meta>
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
