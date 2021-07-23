import { useEffect, useState } from "react"
import Link from "next/link"
import dynamic from 'next/dynamic'
import ReactTooltip from "react-tooltip"
import { motion } from "framer-motion"
const ListModal = dynamic(() => import('../../modal/modal'))
const Panel = dynamic(() => import('../../../styles/home').then((mod) => mod.Panel))

const sidePanel = ({follower, profile, session}) => {
    const [alternatePanel, setPanel] = useState(true)
    const [tooltip, setTool] = useState(false);
    const [friends, showFriends] = useState(false);
    const [followers, showFollowers] = useState(false);
    const followerId = follower.map((id) => {return id.id}).includes(session.userId)
    //Change between Friends and Followers and set tooltip visibility
    useEffect(() => {
      const timer = setTimeout(() => {
        setPanel(!alternatePanel);
      }, 10000);
      setTool(true)
      return () => {
        clearTimeout(timer);
      }
    }, [alternatePanel]);
  
    //Show profile friends
    const showFriendsList = () => {
        showFriends(true)
    }
    //Show profile followers
    const showFollowersList = () => {
        showFollowers(true)
    }

    //Close Modal 
    const close = () => {
       showFriends(false)
       showFollowers(false)
    }

    return (
      <>
        <Panel
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
        {tooltip === true ? <ReactTooltip /> : null}
        {alternatePanel === true ? (
        <div>
        {followerId === true || session.userId === profile.id ?  (
        <>
        <h4 onClick={profile.friends.length > 0 ? showFriendsList : null}>
           Friends <small>{profile.friends.length}</small>
        </h4>
          <div>
          {profile.friends.length ? profile.friends.slice(0, 25).map((friend) => {
            return (
                <Link key={friend.id} href={`/profile/${friend.id}`}>
                  <img height={50} width={50} src={friend.image} data-tip={friend.name} />
                </Link>
            )
          }) : (
            profile.id === session.userId ? (
              <p>You have no friends yet</p>
            ) : (
              <p>{profile.name + ' has no friends yet'}</p>
            )
          )}
          </div>
        </>
        ) : (
          <h3>You must be following {profile.name} to see their friends</h3>
        )}
        </div> 
        ) : (
        <div>
          <h4 onClick={profile.friendsRelation.length ? showFollowersList : null}>
            Followers <small>{profile.friendsRelation.length}</small>
          </h4>
          <div>
          {profile.friendsRelation.length > 0 ? profile.friendsRelation.slice(0,25).map((follower) => {
            return (
              <Link key={follower.id} href={`/profile/${follower.id}`}>
              <img height={50} width={50} src={follower.image} data-tip={follower.name} />
             </Link>
            )
          }) : (
            profile.id === session.userId ? (
              <p>You have no followers yet</p>
            ) : (
              <p>{profile.name + ' has no followers, be the first!'}</p>
            )
          )        
          }
          </div>
        </div>
        )}
        <ListModal friends={friends} followers={followers} follower={follower} profile={profile} close={close} /> 
       </Panel>
      </>
    )
}

export default sidePanel