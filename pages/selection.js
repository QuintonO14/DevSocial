import { getSession } from "next-auth/client"
import prisma from "../lib/prisma"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import {languages, tools } from '../data/data.js'
import { useState } from "react"
import moment from "moment"
import Head from "next/head"
const CheckSelect = dynamic(() => import('../components/profile/edit/checkselect'))
const LangSelect = dynamic(() => import('../styles/home').then((mod) => mod.LangSelect))
const SelectPage = dynamic(() => import('../styles/home').then((mod) => mod.SelectPage))


const Select = ({user}) => {
    const router = useRouter()
    const [selectedLangs, checkLangs] = useState([])
    const [selectedTools, checkTools] = useState([])
    const [firstPage, setPage] = useState(true)
    //Add languages and tools to user's profile
    const submit = async() => {
        const body = {
            languages :selectedLangs,
            tools : selectedTools,
            id : user.id
        }
            await fetch('/api/profile/profile', {
            method: 'PATCH',
            body: JSON.stringify(body)
        })
        router.push('/home')
    }

    return (
       <SelectPage>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="utf-8" />
            <title>DevSocial | Select</title>
            <meta name="description" content="Language and tool selection page for DevSocial user" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        </Head>
        {firstPage === true ? (
        <>
        <h1>Select Languages</h1>
        <small>(This can be changed later)</small>
        <LangSelect>
           {languages.map((language) => {
              return (
                <CheckSelect 
                firstPage={firstPage}
                key={language.value} 
                language={language} 
                selectedLangs={selectedLangs} 
                checkTools={checkTools}
                checkLangs={checkLangs} />
              )
           })}
        </LangSelect>
        </>
        ) : (
        <>
         <h1>Select Tools</h1>
         <small>(This can be changed later)</small>
          <LangSelect>
            {tools.map((tool) => {
               return (
                 <CheckSelect 
                 key={tool.value} 
                 tool={tool}
                 firstPage={firstPage} 
                 selectedTools={selectedTools}
                 checkTools={checkTools} />
               )
            })}
         </LangSelect>
        </>
        )}
        <footer>
            {firstPage === true ? (
            <button onClick={() => setPage(false)}>Next</button>
            ) : (
            <>
                <button onClick={() => setPage(true)}>Previous</button>
                <button onClick={submit}>Finish</button>
            </>
            )
            }
        </footer>
       </SelectPage>
    )
}

export default Select

export async function getServerSideProps(context) {
    const session = await getSession(context)

    const user = await prisma.user.findUnique({
        where: {
            id: session.userId
        }
    })

    // if(moment(user.createdAt).format("hh:mm:ss") != moment(user.updatedAt).format("hh:mm:ss")) {
    //     return {
    //         redirect: {
    //             destination: '/home'
    //         }
    //     }
    // }

    

    return {
        props: {
          session: session,
          user: user
        } 
      }
}