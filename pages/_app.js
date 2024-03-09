import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import { useState } from 'react';
import { ColorContext } from 'context/color';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [colorContext, setColorContext] = useState('bg-green text-gray-dark selection:bg-gray-dark selection:text-green');

  return (
    <ColorContext.Provider value={[colorContext, setColorContext]}>
      <DefaultSeo {...SEO} />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ColorContext.Provider>
  )
}