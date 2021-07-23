import { getProviders, getSession, signIn } from 'next-auth/client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Head from 'next/head'
const SignInPage = dynamic(() => import('../styles/home').then((mod) => mod.SignInPage))


export default function SignIn({providers}) {

  return ( 
  <SignInPage>
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>DevSocial | Sign In</title>
        <meta name="signin" content="Sign in page for DevSocial" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
    </Head>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}>
      <h2>Sign In</h2>
     {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, {callbackUrl: 'https://devsocial-quintono14.vercel.app/selection'})}>
            Connect with {provider.name}
          </button>
        </div>
      ))}
    </motion.div>
  </SignInPage>
  )
}

export async function getServerSideProps (context) {
  const session = await getSession(context)
  
  return {
    props: {
      providers: await getProviders(),
      session : session,
    }
  }
}
