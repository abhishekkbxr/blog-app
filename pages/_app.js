import '../styles/globals.css';
import Navbar from '../components/Navbar';


function MyApp({ Component, pageProps }) {
  // <Navbar/>
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
  )

}

export default MyApp
