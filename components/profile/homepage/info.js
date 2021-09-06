import dynamic from 'next/dynamic'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
const Languages = dynamic(() => import('./languages'))
const Profile = dynamic(() => import('../../../styles/home').then((mod) => mod.Profile))
const ProfileInfo = dynamic(() => import('../../../styles/home').then((mod) => mod.ProfileInfo))
const Tab = dynamic(() => import('../../../styles/home').then((mod) => mod.Tab))
const Follow = dynamic(() => import('../../../styles/home').then((mod) => mod.Follow))
const Unfollow = dynamic(() => import('../../../styles/home').then((mod) => mod.Unfollow))

const Info = ({profile, session}) => {
    const friend = profile.friendsRelation.map((friend) => {return friend.id})
    const [tab, setTab] = useState(false)
    const friends = friend.includes(session.userId)
    const isUser = profile.id === session.userId
    const router = useRouter()

    //Active Class for Profile Tabs
    const active = {
        background: 'rgba(255,180,50,1)',
    }

    const addFollow = async (id) => {
      const body = {
        id: session.userId,
        friend: id
      }
      await fetch(`/api/profile/profile`, {
        method: 'PUT',
        body: JSON.stringify(body)
      })
      router.reload(window.location.pathname)
    }
  
    //Unfollow resulted user and return to profile
    const removeFollow = async (id) => {
      const body = {
        id: session.userId,
        friend: id
      }
      await fetch(`/api/profile/profile`, {
        method: 'DELETE',
        body: JSON.stringify(body)
      })
      router.push('/home')
    }

    
    return (
        <Profile
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}>
          <h1>{profile.name}</h1>
          <img src={profile.image ? profile.image : '/avatar.png'} alt='No Image' />
          {!isUser ? (
          friends ? ( <Unfollow onClick={() => removeFollow(profile.id)}>Unfollow</Unfollow> ) 
          : <Follow onClick={() => addFollow(profile.id)}>Follow</Follow> ) 
          : null}
          <div>
            <Tab onClick={() => setTab(false)} style={tab === false ? active : null}>About</Tab>
            <Tab onClick={() => setTab(true)} style={tab === true ? active : null}>Languages and Tools</Tab>
          </div>
          <ProfileInfo>
          {tab === false ? (
              <p>
                {profile.about ? profile.about : (
                    profile.id === session.userId ? "You have not written anything yet in your about section!\
                    Click Edit Profile in the top right corner to get started!"
                      : profile.name + " has not written anything in their about me just yet"
                    
                )}
              </p>
            ) : 
              <Languages profile={profile} session={session} />
            }
          </ProfileInfo>
        </Profile>
    )
}

export default Info;