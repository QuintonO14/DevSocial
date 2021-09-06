import { getSession } from 'next-auth/client'
import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import  prisma  from '../lib/prisma'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav = dynamic(() => import('../styles/home').then((mod) => mod.Nav))
const ResultsPage = dynamic(() => import('../styles/home').then((mod) => mod.ResultsPage))
const Navigation = dynamic(() => import('../components/navbar'))
const Container = dynamic(() => import('../components/search/container'))

const Results = ({result, searchedUsers, session }) => {
    const [page, setPage] = useState(0)
    const maxPage = Math.ceil(searchedUsers.length / 10) - 1
    //Set Next Page of Results
    const nextPage = () => {
      setPage(page + 1);
    }
    //Set Previous Page of Results
    const prevPage = () => {
        setPage(page - 1);
    }

    return (
      <ResultsPage>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />
          <title>DevSocial | Search Results </title>
          <meta name="description" content="Search results page for users on DevSocial" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        </Head>
        <Navigation />
        <h1>
          {searchedUsers.length} results for "{result}"
        </h1>
        <Container users={searchedUsers} result={result} page={page} session={session} />
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"rgba(50,50,50,1)"}}>
        <Nav style={searchedUsers.length !== 0 && page > 0 ? {"opacity":"1"} : {"opacity":"0","pointerEvents":"none"}}
         onClick={prevPage}>
           <FontAwesomeIcon icon={faChevronLeft} />
        </Nav>
         <Nav style={searchedUsers.length !== 0 && page !== maxPage ? {"opacity":"1"} : {"opacity":"0", "pointerEvents":"none"}}
          onClick={nextPage}>
            <FontAwesomeIcon icon={faChevronRight} />
         </Nav>
        </div>
       </ResultsPage>  
    )
}

export default Results;

export async function getServerSideProps(context) {
    const session = await getSession(context)
    const result = context.query.string
    if(!session) {
      return {
        redirect: {
          destination: '/signIn',
          permanent: false
        }
      }
    }  


    const searchedUsers = await prisma.user.findMany({
        where: {
          OR: [
            {
              name: {
                contains: result
              } 
            },
            {
              name: {
                contains: result.charAt(0).toUpperCase() + result.slice(1)
              }
            },
            {
              name: {
                contains: result.toUpperCase()
              }
            }
            
          ]
        },
        include: {
          friendsRelation: true,
          friends: true
        },
        orderBy: {
          name: 'asc'
        }
    })

    return {
      props: {
        searchedUsers: JSON.parse(JSON.stringify(searchedUsers)),
        session: session,
        result: result,
      } 
    }
   
  }
  