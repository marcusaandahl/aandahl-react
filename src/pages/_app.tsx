import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aandahl.dev</title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          transition={Zoom}
          closeOnClick
          rtl={false}
        />
    </>    
  )
}

export default MyApp
