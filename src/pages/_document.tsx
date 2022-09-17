import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        /> */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#121212"></meta>
        <meta name="theme-color" content="#121212" />
        <title>Aandahl.dev</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}