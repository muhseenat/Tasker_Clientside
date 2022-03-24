import Head from 'next/head'
import Nav from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';




function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <Nav/>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
