import dynamic from "next/dynamic"
import Link from 'next/link'
import { useState } from "react"
const ListItem = dynamic(() => import('../../styles/home').then((mod) => mod.ListItem))

const Followers = ({following, follower, friendId}) => {
    const isFriend = follower.friendsRelation.map((friend) => { return friend.id })
    const [follow, setFollow] = useState(isFriend.includes(friendId) ? true : false)
    //Follow another user
    const addFollow = async (id) => {
        setFollow(!follow)
        const body = {
          id: friendId,
          friend: id
        }
        await fetch(`/api/profile/profile`, {
          method: 'PUT',
          body: JSON.stringify(body)
        })
      }

      const disabled = {
        backgroundColor: 'rgba(50, 50, 50, 0.5)'
      }

    
    return (
        <ListItem key={follower.id} style={following === true ? {justifyContent:'space-between'} : null}>
            <img height={50} width={50} src={follower.image} alt="image" />
            <Link href={`/profile/${follower.id}`}>
                <p>{follower.name}</p>
            </Link>
        {following === true && follow === false ? 
            <button onClick={() => addFollow(follower.id)}>Follow</button> 
            : following === true && follow === true ?
            <button style={disabled} disabled>Following</button>
        : null}
        </ListItem>
    )
}

export default Followers