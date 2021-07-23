import dynamic from 'next/dynamic'
const ResultPic = dynamic(() => import('./result'))
const Results = dynamic(() => import('../../styles/home').then((mod) => mod.Results))

const Container = ({users, page, session}) => {
    return (
        <Results>
        {users.slice(page*10,10*(page+1)).map((user) => {
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
       </Results>
    )
}

export default Container