import dynamic from 'next/dynamic'
import { motion } from "framer-motion"
const Friends = dynamic(() => import('../modal/friends'))
const Followers = dynamic(() => import('../modal/followers'))
const CloseModal = dynamic(() => import('../../styles/home').then((mod) => mod.CloseModal))
const List = dynamic(() => import('../../styles/home').then((mod) => mod.List))
const Modal = dynamic(() => import('../../styles/home').then((mod) => mod.Modal))
const Overlay = dynamic(() => import('../../styles/home').then((mod) => mod.Overlay))

const ListModal = ({close, deleting, followers, following, friends, profile}) => {
    return (
      <>
        {friends === true ? (
          <>
          <Modal 
          as={motion.div} 
          animate={deleting === true ? {y: 500} : {y: 100}} 
          transition={{ease: 'easeInOut', type: 'spring', bounce:0.25, duration: .5}}>
            <h1>Friends</h1>
            <List>
            {profile.friends.map((friend) => {
              return (
                  <Friends 
                  key={friend.id}
                  deleting={deleting}
                  friend={friend}
                  isFriend={friends} 
                  friendId={profile.id}
                  />
              )
            })}
            </List>
            <CloseModal onClick={close}>X</CloseModal>
          </Modal>
          <Overlay onClick={close} />
          </>
        ) : null}
        {followers === true ? (
          <>
          <Modal as={motion.div}
            animate={following === true ? {y: 500} : {y: 100}} 
            transition={{ease: 'easeInOut', type: 'spring', bounce:0.25, duration: .5}}>
            <h1>Followers</h1>
            <List>
            {profile.friendsRelation.map((follower) => {
              return (
                <Followers
                key={follower.id}
                following={following}
                follower={follower}
                friendId={profile.id}
                /> 
              )
            })}
            </List>
            <CloseModal onClick={close}>X</CloseModal>
          </Modal>
          <Overlay onClick={close} />
          </>
        ) : null}
      </>
    )
}

export default ListModal

