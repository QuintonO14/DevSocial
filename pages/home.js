import  prisma  from '../lib/prisma'
import dynamic from 'next/dynamic'
import { getSession, signOut } from 'next-auth/client'
import { useRef, useState } from 'react';
import Head from 'next/head'
const Feed = dynamic(() => import('../components/posts/feed'))
const Info = dynamic(() => import('../components/profile/homepage/info'))
const Navigation = dynamic(() => import ('../components/navbar'))
const SidePanel = dynamic(() => import('../components/profile/homepage/sidePanel'))
const Dashboard = dynamic(() => import('../styles/home').then((mod) => mod.Dashboard))

const Home = ({posts, profile, session, users}) => { 
    const friends = profile.friends.map((friend) => {
      return friend.id
    })
    const followers = profile.friendsRelation.map((follower) => {
      return follower.id
    })
    const searchedUsers = users.filter((user => user.id !== session.userId))
    const [resultsString , results] = useState('')
    const [filteredUsers, setUsers] = useState(null)
    const content = useRef(null)

    //Trigger Create Post Form
    const newPost = async () => {
        showCreate(true)
    }

    //Search Users Function
    const findUsers = async (e) => {
      const searchUsers = e.target.value.toLowerCase()
      results(searchUsers)
      const usersFiltered = searchedUsers.filter((user) => {
        return user.name.toLowerCase().match(searchUsers.replace(/\\/g, "\\\\"));
      })
      const foundUsers = usersFiltered.map((user) => {
          return user.id
      })
      if(!searchUsers) {
        setUsers(null)
      } else {
      setUsers(foundUsers)
      }
    }

    return (
      <Dashboard>
       <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>DevSocial | Home</title>
        <meta name="homepage" content="The homepage for logged in DevSocial users" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
       </Head>
       <Navigation filteredUsers={filteredUsers} findUsers={findUsers} resultsString={resultsString} session={session} />
       <div>
       <Info profile={profile} session={session}/>
        <Feed
        content={content}
        friends={friends}
        posts={posts}
        profile={profile}
        newPost={newPost}
        session={session}
        signOut={signOut}
        />
       <SidePanel profile={profile} session={session} follower={followers} />
       </div>
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

  const users = await prisma.user.findMany()
  return {
    props: {
      posts : JSON.parse(JSON.stringify(posts)),
      profile: JSON.parse(JSON.stringify(profile)),
      users: JSON.parse(JSON.stringify(users)),
      session: session
    } 
  }
 
}
