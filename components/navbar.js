import Link from 'next/link'
import { signOut } from 'next-auth/client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const Dropdown = dynamic(() => import('../styles/home').then((mod) => mod.Dropdown))
const Header = dynamic(() => import('../styles/home').then((mod) => mod.Header))
const Logo = dynamic(() => import('../styles/home').then((mod) => mod.Logo))
const ResultsTag = dynamic(() => import('../styles/home').then((mod) => mod.ResultsTag))
const Search = dynamic(() => import('../styles/home').then((mod) => mod.Search))
const User = dynamic(() => import('../styles/home').then((mod) => mod.User))

const Navigation = () => {
  const [users, setUsers] = useState(null)


  useEffect(() => {
   const users = async() => {
      try {
      axios('/api/profile/profile', { 
        method: 'GET' 
      }).then((res) => {
      setUsers(res.data)
      })
      } catch (error) {
        console.log('error', error)
      }
    }
    users()
  }, [])
  const [show, setShow] = useState(false)
  const router = useRouter()
  const [resultsString , results] = useState('')
  const [filteredUsers, setFiltered] = useState(null)
  //Activate dropdown menu
  const reveal = () => {
    setShow(!show)
  }
    //Search Users Function
    const findUsers = async (e) => {
      const searchUsers = e.target.value.toLowerCase()
      results(searchUsers)
      const usersFiltered = users.filter((user) => {
        return user.name.toLowerCase().match(searchUsers.replace(/\\/g, "\\\\"));
      })
      const foundUsers = usersFiltered.map((user) => {
          return user.id
      })
      if(!searchUsers) {
        setFiltered(null)
      } else {
      setFiltered(foundUsers)
      }
    }

    const searchThem = (event) => {
      if(event.key === 'Enter') {
         router.push({pathname: '/results', query: { string: event.target.value}})
      }
    }

  return (
    <Header>
      <Link href="/home"><Logo></Logo></Link>
      <Search type="search" onChange={findUsers} onKeyDown={searchThem} />
        <User>
          <FontAwesomeIcon icon={faBars} onClick={reveal} /> 
          {show === true && (
            <Dropdown>
              <Link href={`/profile/edit`} as={`/profile/edit`}>
              <a>Edit Profile</a>
              </Link>
              <a onClick={() => signOut()}>Logout</a>
            </Dropdown>
          )}
        </User>
    </Header>
  )
}

export default Navigation

