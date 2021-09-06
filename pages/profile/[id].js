import  prisma  from '../../lib/prisma'
import { getSession } from 'next-auth/client'
import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
const Blocked = dynamic(() => import('../../components/posts/blocked'))
const Feed = dynamic(() => import('../../components/posts/feed'))
const Info = dynamic(() => import('../../components/profile/homepage/info'))
const Navigation = dynamic(() => import('../../components/navbar'))
const SidePanel = dynamic(() => import('../../components/profile/homepage/sidePanel'))
const Dashboard = dynamic(() => import('../../styles/home').then((mod) => mod.Dashboard))
const BigScreen = dynamic(() => import('../../styles/home').then((mod) => mod.BigScreen))

const Home = ({posts, profile, session }) => { 
    const [screen, setScreen] = useState(0) 
    const [section, setSection] = useState(false)
    const following = profile.friendsRelation.map((friend) => {
      return friend
    })
    const isFollowed = following.map((id) => { return id.id}).includes(session.userId)
    const content = useRef(null)
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
        <title>{`DevSocial | ${profile.name}`}</title>
        <meta name="profile" content={`Profile page for ${profile.id}`} />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
       </Head>
       <Navigation />
       {screen < 900 ? (

         <div>
         {section === false ? (
          <>
          <Info profile={profile} session={session} /> 
          <SidePanel profile={profile} session={session} follower={following} />
          </>
         ) : (

          isFollowed ? (
          <Feed 
          content={content}
          friends={following}
          posts={posts}
          profile={profile}
          session={session}
          /> 
          ) : (
            <Blocked profile={profile} session={session} />
          )
          )}
           <button onClick={() => setSection(!section)}>
           {section === false ? <FontAwesomeIcon icon={faPencilAlt} /> : <FontAwesomeIcon icon={faHouseUser} />}
          </button>
         </div>
       ) : (
        <BigScreen>
        <section>
        <Info profile={profile} session={session}/>
        <SidePanel profile={profile} session={session} follower={following} />
        </section>
        {isFollowed ? (
          <Feed
          content={content}
          friends={following}
          posts={posts}
          profile={profile}
          session={session}
          />
        ) : <Blocked profile={profile} session={session} /> }
        </BigScreen>
       )}
      </Dashboard>
    )
}

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const id = context.params.id
  if(!session) {
    return {
      redirect: {
        destination: '/signIn',
        permanent: false
      }
    }
  }

  if(session.userId === id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }


  const profile = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include :{
      friends : {
        select : {
          id: true,
          name: true,
          image: true,
          email: true,
          posts: true
        }
      },
      friendsRelation: {
        select: {
        id: true,
        name: true,
        image: true,
        email: true,
        friendsRelation: true,
       
        }
      }
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
