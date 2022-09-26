import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@100;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#171717" />
        <meta name="msapplication-navbutton-color" content="#171717" />
        <meta name="theme-color" content="#171717" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}