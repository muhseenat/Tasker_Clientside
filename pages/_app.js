import Head from 'next/head'
import AppBar from '../components/Nav';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapper } from "../store"
function MyApp({ Component, pageProps }) {
  const user= false;
  return <>
  <Head>
  </Head>

  <Component {...pageProps} />
  </>
}

export default wrapper.withRedux(MyApp);
