import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Global from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
