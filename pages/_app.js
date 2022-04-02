import Head from 'next/head'
import AppBar from '../components/Nav';
import { useSelector } from 'react-redux';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapper } from "../store"
function MyApp({ Component, pageProps }) {
const user=useSelector(state=>state.user.userData)
  return (
  <>
  <Head>
    {user&&<AppBar/>}
  </Head>

  <Component {...pageProps} />
  </>
  )
}

export default wrapper.withRedux(MyApp);
