import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from "framer-motion"
const Friends = dynamic(() => import('../modal/friends'))
const Followers = dynamic(() => import('../modal/followers'))
const CloseModal = dynamic(() => import('../../styles/home').then((mod) => mod.CloseModal))
const List = dynamic(() => import('../../styles/home').then((mod) => mod.List))
const Modal = dynamic(() => import('../../styles/home').then((mod) => mod.Modal))

const Overlay = dynamic(() => import('../../styles/home').then((mod) => mod.Overlay))

const ListModal = ({close, deleting, following, follows, friends, isFriend, profile}) => {

    return (
      <>
        <AnimatePresence>
        {isFriend === true && (
          <>
          <Modal
          as={motion.div}
          initial={{opacity: 0}}
          animate={{ opacity: 1}} 
          transition={{ease: 'easeInOut', type: 'spring', bounce:0.25, duration: .5}}>
            <h1>Friends</h1>
            <List>
            {profile.friends.map((friend) => {
              return (
                  <Friends 
                  key={friend.id}
                  deleting={deleting}
                  isFriend={isFriend}
                  friend={friend}
                  friendId={profile.id}
                  />
              )
            })}
            </List>
            <CloseModal onClick={close}>X</CloseModal>
          </Modal>
          <Overlay onClick={close} />
          </>
        )}
        </AnimatePresence>
       <AnimatePresence>
          {follows === true && (
          <>
          <Modal 
            as={motion.div}
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            transition={{ease: 'easeInOut', type: 'spring', bounce:0.25, duration: .5}}>
            <h1>Followers</h1>
            <List>
            {profile.friendsRelation.map((follower) => {

              return (
                <Followers
                key={follower.id}
                follows={follows}
                follower={follower}
                following={following}
                friendId={profile.id}
                /> 
              )
            })}
            </List>
            <CloseModal onClick={close}>X</CloseModal>
          </Modal>
          <Overlay onClick={close} />
          </>
        )}
       </AnimatePresence>
      </>
    )
}

export default ListModal

