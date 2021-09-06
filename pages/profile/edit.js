import prisma from '../../lib/prisma'
import { getSession } from 'next-auth/client'
import { useRef, useState } from 'react';
import {languages, tools}  from '../../data/data';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Navigation = dynamic(() => import('../../components/navbar'))
const SaveProfile = dynamic(() => import('../../components/profile/edit/saveProfile'))

const Profile = ({ data }) => {
    const userLanguages =  useRef(null) 
    const userTools = useRef(null)
    const name = useRef(null)
    const email = useRef(null)
    const about = useRef(null)
    const [file, setFile] = useState(null);
    const [message, setMsg] = useState('')
    const router = useRouter();
    const filteredLang = languages.filter(language => data.languages.includes(language.value))
    const filteredTool = tools.filter(tool => data.tools.includes(tool.value))

    //Convert image to binary 
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
          reject(error);
        }
      })
    }
    //Handles file upload for form submission
    const handleFile = async (e) => {
      let files = e.target.files[0]
      setFile(files);
    }

    //Update user profile 
    const updateProfile = async () => {
      let base64 
      if(file){
        base64 = await convertBase64(file)
      } else {
        base64 = data.image
      }
      const lang = userLanguages.current.state.value
      const tool = userTools.current.state.value
      const mappedLang = lang.map((language => {
        return language.value
      }))
      const mappedTool = tool.map((tool => {
        return tool.value
      }))
      const body = {
        id: data.id,
        about: about.current.value,
        name: name.current.value,
        email: email.current.value,
        image:  base64, 
        languages: mappedLang,
        tools: mappedTool
      }
    
      await fetch (`/api/profile/profile`, {
          method: 'PATCH',
          body: JSON.stringify(body)
      }).then((response) => {
        if(response.status === 500) {
          setMsg('Email unavailable for use')
          document.getElementById("email").focus()
          document.getElementById("email").style.outline="red"
          document.getElementById("email").style.borderColor="red"
          setTimeout(() => {
            setMsg(null)
          }, 10000)
        } else {
          setMsg('Profile Updated!')
          setTimeout(() => {
          router.push('/home')
          setMsg(null)
          }, 1000) 
        }
      })
           
    }

    //Delete user account and all associated content.
    const deleteAccount = async(id) => {
      await fetch (`/api/profile/${id}`, {
         method: 'DELETE',
         body: id
      })
      setTimeout(() => {
        setMsg('Account Deleted')
      }, 5000)
      router.push('/signIn')
    }

    return (
        <div style={{height: 'auto'}}>
            <Head>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta charSet="utf-8" />
              <title>DevSocial | Edit</title>
              <meta name="description" content="Edit profile and delete account page for Dev Social" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
            </Head>
            <Navigation />
            <SaveProfile
             about={about}
             data={data} 
             deleteAccount={deleteAccount}
             email={email}
             file={file}
             filteredLang={filteredLang}
             filteredTool={filteredTool}
             handleFile={handleFile}
             message={message}
             name={name}
             updateProfile={updateProfile}
             userLanguages={userLanguages} 
             userTools={userTools}
            />
        </div>
    )
}

export default Profile

export async function getServerSideProps(context) {  
    const session = await getSession(context)
    if(!session) {
      return {
        redirect: {
          destination: '/signIn',
          permanent: false
        }
      }
    }
    const profile = await prisma.user.findUnique({
      where: {
          id: session.userId
        },
        include: {
          friends: {
            select: {
              name: true,
              id: true,
              image: true,
            }
          },
          friendsRelation: {
            select: {
              name: true,
              image: true,
              id: true,
              friendsRelation: true,
            }
          }
        }
      })

      return {
        props: {
          data : JSON.parse(JSON.stringify(profile)),
          session: session
        } 
      }
}