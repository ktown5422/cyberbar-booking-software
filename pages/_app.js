import '../styles/globals.css'
import { StoreProvider } from 'easy-peasy'
import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp