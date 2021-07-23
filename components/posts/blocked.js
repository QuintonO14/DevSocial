import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const BlockedPosts = dynamic(() => import('../../styles/home').then((mod) => mod.BlockedPosts))
const Follow = dynamic(() => import('../../styles/home').then((mod) => mod.Follow))

const Blocked = ({profile, session}) => {
    const router = useRouter()
    //Follow user to view profile
    const addFollow = async (id) => {
        const body = {
          id: session.userId,
          friend: id
        }
        await fetch(`/api/profile/profile`, {
          method: 'PUT',
          body: JSON.stringify(body)
        })
        router.replace(router.asPath)
      }

    return (
        <BlockedPosts
        as={motion.div}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2}}>
            <h2>You have to follow {profile.name} in order to see their posts!</h2>
            <Follow onClick={() => addFollow(profile.id)}>Follow</Follow>
        </BlockedPosts>
    )
}

export default Blocked;