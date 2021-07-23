import Link from 'next/link'
import { signOut } from 'next-auth/client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCaretDown} from '@fortawesome/free-solid-svg-icons'
const Dropdown = dynamic(() => import('../styles/home').then((mod) => mod.Dropdown))
const Header = dynamic(() => import('../styles/home').then((mod) => mod.Header))
const Logo = dynamic(() => import('../styles/home').then((mod) => mod.Logo))
const ResultsTag = dynamic(() => import('../styles/home').then((mod) => mod.ResultsTag))
const Search = dynamic(() => import('../styles/home').then((mod) => mod.Search))
const User = dynamic(() => import('../styles/home').then((mod) => mod.User))

const Navigation = ({ filteredUsers, findUsers, resultsString, session}) => {
  const [show, setShow] = useState(false)
  //Activate dropdown menu
  const reveal = () => {
    setShow(!show)
  }

  return (
    <Header>
      <Link href="/home"><Logo>DevSocial</Logo></Link>
      <ResultsTag>
      <Search type="search" onChange={findUsers} />
      {filteredUsers && filteredUsers.length != 0 ? (
      <>  
        <Link href={{pathname: '/results', query: {string: resultsString}}}>
          <strong>
            {filteredUsers.length} users found 
          </strong>
        </Link>
        <FontAwesomeIcon icon={faArrowRight} />
      </>
      ) : filteredUsers && filteredUsers.length === 0 ? (
      <strong>0 results found</strong>
      ) : null}
      </ResultsTag>
        <User>
          <FontAwesomeIcon icon={faCaretDown} onClick={reveal} /> 
          {show === true ? (
            <Dropdown>
              <Link href={`/profile/edit`} as={`/profile/edit`}>
              <a>Edit Profile</a>
              </Link>
              <a onClick={() => signOut()}>Logout</a>
            </Dropdown>
          ) : null}
          <img height={50} width={50} src={session.user.image ? session.user.image : '/avatar.png'} />
        </User>
    </Header>
  )
}

export default Navigation

