import {getSession} from 'next-auth/client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { motion } from 'framer-motion'
const Devsocial = dynamic(() => import('../styles/home').then((mod) => mod.Devsocial))

export default function Index() {
 
  return (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <title>DevSocial</title>
      <meta name="devsocial" content="A place for developers to connect, share, and work together more personally" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
    </Head>
    <Devsocial
     as={motion.div}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.2 }}>
      <div>
          <h1>Welcome to DevSocial</h1>
          <h3>Connect with other developers from around the world! Share ideas, code, and much more!</h3>
        <div>
          <Link href="/signIn">
            <button>Sign In</button>
          </Link>
          <Link href="/https://github.com/QuintonO14/DevSocial">
            <a>Source Code</a>
          </Link>
        </div>
      </div>
    </Devsocial>
  </>
  )
}

export async function getServerSideProps (context) {
  const session = await getSession(context)
  if(session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false
      }
    }
  }
  return {
    props: {
      session : session
    }
  }
}
