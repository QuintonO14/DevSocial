import  prisma  from '../lib/prisma'
import dynamic from 'next/dynamic'
import { getSession, signOut } from 'next-auth/client'
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faUser } from '@fortawesome/free-solid-svg-icons';
const Feed = dynamic(() => import('../components/posts/feed'))
const Info = dynamic(() => import('../components/profile/homepage/info'))
const Navigation = dynamic(() => import ('../components/navbar'))
const SidePanel = dynamic(() => import('../components/profile/homepage/sidePanel'))
const Dashboard = dynamic(() => import('../styles/home').then((mod) => mod.Dashboard))
const BigScreen = dynamic(() => import('../styles/home').then((mod) => mod.BigScreen))


const Home = ({posts, profile, session }) => { 
    const [screen, setScreen] = useState(0)
    const [section, setSection] = useState(false)
    const friends = profile.friends.map((friend) => {
      return friend.id
    })
    const followers = profile.friendsRelation.map((follower) => {
      return follower.id
    })
    const content = useRef(null)

    //Trigger Create Post Form
    const newPost = async () => {
        showCreate(true)
    }
    //Set device viewport width to configure home layout
    useEffect(() => {
      const ac = new AbortController();
      const initialWidth = () => {
          setScreen(window.innerWidth)
      }
      const resize = () => {
          setScreen(window.innerWidth)
      }
      window.onload = initialWidth()
      window.addEventListener("resize", resize)
      return () => ac.abort();
    }, [])

    return (

      <Dashboard>
       <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>DevSocial | Home</title>
        <meta name="description" content="The homepage for logged in DevSocial users" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
       </Head>
       <Navigation />
       {screen < 900 ? (
          <div>
          {section === true  ? (
          <>
          <Info profile={profile} session={session}/>
          <SidePanel profile={profile} session={session} follower={followers} />
          </>
          ) : (
           <Feed
           content={content}
           friends={friends}
           posts={posts}
           profile={profile}
           newPost={newPost}
           session={session}
           signOut={signOut}
           />
          )}
          <button onClick={() => setSection(!section)}>
            {section === true ? <FontAwesomeIcon icon={faPencilAlt} /> : <FontAwesomeIcon icon={faUser} />}
           </button>
          </div>
       ) : (
         <BigScreen>
          <section>
          <Info profile={profile} session={session}/>
          <SidePanel profile={profile} session={session} follower={followers} />
          </section>
          <Feed
           content={content}
           friends={friends}
           posts={posts}
           profile={profile}
           newPost={newPost}
           session={session}
           signOut={signOut}
           />
         </BigScreen>
       )}
      </Dashboard>
    )
}

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if(!session) {
    return {
      redirect: {
        destination: '/signIn',
        permanent: false
      }
    }
  }

  const profile = await prisma.user.findUnique({
    where: {
      id: session.userId,
    },
    include :{
      friends : {
        select : {
          id: true,
          name: true,
          image: true,
          email: true,
          posts: true,
          friendsRelation: true,
        }
      },
      friendsRelation: {
        select: {
        id: true,
        name: true,
        image: true,
        email: true,
        friendsRelation: true
        }
      },
    }
  })

  const posts = await prisma.post.findMany({
    where: { 
        published: true
     },
     include : {
       author: {
         select: {
           name: true,
           image: true,
           posts: true,
         }
       },
       comments: {
         select: {
           comment: true
         }
       }
     },  
  })

  return {
    props: {
      posts : JSON.parse(JSON.stringify(posts)),
      profile: JSON.parse(JSON.stringify(profile)),
      session: session
    } 
  }
 
}
