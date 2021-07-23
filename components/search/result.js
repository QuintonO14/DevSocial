import dynamic from 'next/dynamic'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const Follow = dynamic(() => import('../../styles/home').then((mod) => mod.Follow))
const Unfollow = dynamic(() => import('../../styles/home').then((mod) => mod.Unfollow))
const Result = dynamic(() => import('../../styles/home').then((mod) => mod.Result))

const ResultPic = ({user, session, isFriend, isFollowing}) => {
    const [follow, setFollow] = useState(isFriend.includes(session.userId) ? true : false)
    const [following, setFollowing] = useState(isFollowing.includes(session.userId) ? true : false)
    const [tool, isVisible] = useState(false)
        //cancels dangerouslySetHTML warning for ReactTooltip
        setTimeout(() => {
          isVisible(true)
        }, 100)
    //Follow resulted user
    const addFollow = async (id) => {
        setFollow(!follow)
        const body = {
          id: session.userId,
          friend: id
        }
        await fetch(`/api/profile/profile`, {
          method: 'PUT',
          body: JSON.stringify(body)
        })
      }
    
      //Unfollow resulted user
      const removeFollow = async (id) => {
        setFollow(!follow)
        const body = {
          id: session.userId,
          friend: id
        }
        await fetch(`/api/profile/profile`, {
          method: 'DELETE',
          body: JSON.stringify(body)
        })
      }

    return (
        <Result key={user.id}>
          <Link href={`/profile/${user.id}`}>
          <h5>{user.name}</h5>
          </Link>
          <img src={user.image}  alt="No image" />
          <footer>
          {follow ?
          <Unfollow id="unfollow" onClick={() => removeFollow(user.id)}>Unfollow</Unfollow> :
          <Follow id="follow" onClick={() => addFollow(user.id)}>Follow</Follow>
          }
          {following ? <FontAwesomeIcon data-tip="Following You" icon={faEye} /> : null}
          {tool === true ? <ReactTooltip /> : null}
          </footer>
        </Result>
)
}

export default ResultPic; 