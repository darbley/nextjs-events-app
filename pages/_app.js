import Wrapper from '../Layout/Wrapper/Wrapper';
import '../styles/globals.css'
import '../styles/scss/styles.scss';

function MyApp({ Component, pageProps }) {
  return <Wrapper><Component {...pageProps} /></Wrapper>
}

export default MyApp
