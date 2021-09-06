import {  Provider } from 'next-auth/client'
import dynamic from 'next/dynamic';
import { GlobalStyles } from '../styles/global';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimateSharedLayout } from 'framer-motion';
const Loader = dynamic(() => import('../styles/home').then((mod) => mod.Loader))

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => { setLoading(true); };
    const handleComplete = () => { setLoading(false); };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
  <AnimateSharedLayout>
    <Provider session={pageProps.session}>
      <GlobalStyles />
      {loading ? (
      <div style={{display: 'flex', height: '100%'}}>
        <Loader />
      </div>) : ( 
      <Component {...pageProps} />
      )}
    </Provider>
  </AnimateSharedLayout>
  )
}
