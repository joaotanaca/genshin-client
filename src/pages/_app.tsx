import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { TestText, Global } from '../pages/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/> 
      </div>
      
      <TestText>
        <p>Hello App!</p>
      </TestText>
      <Component {...pageProps} />
    </Global>
  )
}
export default MyApp
