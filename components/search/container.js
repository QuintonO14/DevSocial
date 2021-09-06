import dynamic from 'next/dynamic'
const Link = dynamic(() => import('next/link'))
const ResultPic = dynamic(() => import('./result'))
const Results = dynamic(() => import('../../styles/home').then((mod) => mod.Results))

const Container = ({users, page, result, session}) => {
    return (
        <Results>
        {users.slice(page*12,12*(page+1)).map((user) => {
          const isFriend = user.friendsRelation.map((friend) => {
            return friend.id
          })
          
          const isFollowing = user.friends.map((friend) => {
            return friend.id
          })
          return (
            <ResultPic 
            key={user.id} 
            session={session} 
            user={user} 
            isFriend={isFriend} 
            isFollowing={isFollowing} />
          )
        })}
        {users.length < 1 && (<Link href="/"><button>Go Back</button></Link>)}
       </Results>
    )
}

export default Container