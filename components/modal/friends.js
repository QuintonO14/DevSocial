import dynamic from "next/dynamic"
import Link from 'next/link'
import { useState } from "react"
const ListItem = dynamic(() => import('../../styles/home').then((mod) => mod.ListItem))

const Friends = ({deleting, friendId, friend, isFriend }) => {
    const [follow, setFollow] = useState(isFriend === true ? true : false)

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
      //Stop following a user
      const removeFollow = async (id) => {
        setFollow(!follow)
        const body = {
          id: friendId,
          friend: id
        }
        await fetch(`/api/profile/profile`, {
          method: 'DELETE',
          body: JSON.stringify(body)
        })
      }

    return (
        <ListItem key={friend.id} style={deleting === true ? {justifyContent:'space-between'} : null}>
            <img height={50} width={50} src={friend.image} alt="image" />
            <Link href={`/profile/${friend.id}`}>
                <p>{friend.name}</p>
            </Link>
        {deleting === true && (
          follow == true ? (
            <button onClick={() => removeFollow(friend.id)}>Unfollow</button>
          ) : (
            <button onClick={() => addFollow(friend.id)}>Follow</button>
          )
        )}
        </ListItem>
    )
}

export default Friends