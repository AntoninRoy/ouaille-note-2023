import '@/styles/globals.css'
import '@/styles/test.css'

import '@/styles/footer.css'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  return (

      <Component {...pageProps} key={router.asPath} />

  );}
