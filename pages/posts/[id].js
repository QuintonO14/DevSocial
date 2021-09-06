import { getSession } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import prisma from '../../lib/prisma'
import Head from 'next/head'
const Post = dynamic(() => import('../../components/posts/post'))
const Navigation = dynamic(() => import('../../components/navbar'))
const Error = dynamic(() => import('../../styles/home').then((mod) => mod.Error))
const SinglePost = dynamic(() => import('../../styles/home').then((mod) => mod.SinglePost))
const PostAuthor = dynamic(() => import('../../styles/home').then((mod) => mod.PostAuthor))
const ProfilePage = dynamic(() => import('../../styles/home').then((mod) => mod.ProfilePage))


const id = ({post, session}) => {
    const [tool, isVisible] = useState(false)
    const [edit, editing] = useState(false)
    const [comm, setComm] = useState('')
    const editRef = useRef(null)
    const [message, setMsg] = useState('')
    const [comments, setComments] = useState(post.comments)
    const router = useRouter()
    //Set tooltip visibility
    setTimeout(() => {
        isVisible(true)
      }, 1000)

    //Add a comment to post
    const addComment = async (e) => {
        e.preventDefault()
        if (!/\S/.test(comm)) {
            setMsg('Please enter a non white space character')
            setTimeout(() => {
                setMsg('')
            }, 3000)
        } else {
        const newComm = {
            comment: comm,
            postId: post.id,
            authorId: session.userId,
            author: {
                name: session.user.name
            },
        }
        await fetch(`/api/comments/comment`, {
            method: 'POST',
            body: JSON.stringify(newComm)
        })
        setComments([...comments.concat(newComm)])
        document.getElementById('comment').value = ''
        router.replace(router.asPath);
    }
    }

    //Set state of current value of inputs
    const handleChange = async (e) => {
     setComm(e.target.value)
    }

    //Delete a post
    const deletePost = async () => {
        const id = post.id
        await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
            body: id
        })
        router.push('/home')
    }

    //Enter editing mode for a post
    const editPost = async () => {
        if(edit === false){
            editing(true)
        } else {
            editing(false)
        }
    }

    //Save an edited post
    const savePost = async () => {
       if(!editRef.current.innerText.trim().length) {
           setMsg('A post may not be left blank')
           setTimeout(() => {
               setMsg(null)
           }, 2000)
       } else {
        const body = {
            id : post.id,
            content : editRef.current.innerText.trim()
        }
        await fetch(`/api/posts/${post.id}` , {
            method: 'PUT',
            body: JSON.stringify(body)
        })
        editing(false)
      }
    }

    //Focus on element to emphasize adding a new comment
    if(edit === true) {
        setTimeout(() => {
            document.getElementById("postEdit").focus()
        }, 100)
    }

    return (
        <ProfilePage>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <title>{`DevSocial | ${post.content.substring(0, 10)}...`}</title>
                <meta name="post" content={`${post} belonging to ${post.author} on DevSocial`} />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
            </Head>
            <Navigation />
            <SinglePost>
                {message ? <Error>{message}</Error> : null}
                <PostAuthor>
                <Link href={`/profile/${post.authorId}`}>
                      <img src={post.author.image ? post.author.image : '/avatar.png'} />
                </Link>
                <h4>{post.author.name}</h4>
                </PostAuthor>
                {session.userId === post.authorId ? (
                    <FontAwesomeIcon 
                    onClick={() => editPost(!edit)} 
                    icon={faEdit} 
                    data-tip="Edit Post" />
                ) : null}
            {tool === true ? <ReactTooltip /> : null }
                <Post
                 post={post}
                 addComment={addComment}
                 handleChange={handleChange}
                 deletePost={deletePost}
                 edit={edit}
                 editRef={editRef}
                 save={savePost}
                 session={session}/>
            </SinglePost>
        </ProfilePage>
    )
}

export default id;

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

    const post = await prisma.post.findUnique({
      where: {
        id: context.params.id
      },
      include: {
        author: {
          select: { 
              name: true,
              image: true
             },
        },
        comments: {
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                author: {
                    select: { 
                        name: true,
                        image: true,
                        id: true
                    }
                }
            }
        }
        }
    })
    
    return {
      props: {
        post : JSON.parse(JSON.stringify(post)),
        session: await getSession(context),
      } 
    }
   
  }
  