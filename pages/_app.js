import Head from 'next/head'
import Nav from '../components/Navbar'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapper } from "../store"
function MyApp({ Component, pageProps }) {
  const user= false;
  return <>
  <Head>
{user&&<Nav/>}
  </Head>
  <Component {...pageProps} />
  </>
}

export default wrapper.withRedux(MyApp);
