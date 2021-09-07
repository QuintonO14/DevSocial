import dynamic from 'next/dynamic'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Moment from 'react-moment'
import { motion } from 'framer-motion'
const Post = dynamic(() => import('../../styles/home').then((mod) => mod.Post))
const Posts = dynamic(() => import('../../styles/home').then((mod) => mod.Posts))
const Form = dynamic(() => import('../../components/posts/form'))

const Feed = ({ posts, profile, session }) => {
    const content = useRef(null)
    const [create, showCreate] = useState(null)
    const [message, setMsg] = useState(null)
    const router = useRouter()
    const friends = profile.friends.map((friend) => {return friend.id})
    const friendsPosts = posts.filter((i => friends.includes(i.authorId)))
    const usersPosts = posts.filter((i => i.authorId === profile.id))
    const allPosts = friendsPosts.concat(usersPosts)
    //Sort posts by newest 
    allPosts.sort((a,b) => {
      const date1 = new Date(a.createdAt)
      const date2 = new Date(b.createdAt)
      return date2 - date1
    });
    const [profilePosts, setPosts] = useState(allPosts)
    //Create a new post 
    const createPost = async (e) => {
          e.preventDefault()
          const noValue = content.current.value.trim().length 
          if(noValue === 0){
            setMsg('Please enter a non whitespace character')
            setTimeout(() => {
              setMsg(null)
            }, 3000)
          } else {
          const contents = content.current.value
              const body = {
                  content: contents,
                  published: true,
                  authorId: session.userId,
              }
              await fetch('/api/posts/posts', {
                method: 'POST',
                body: JSON.stringify(body),
              })
              showCreate(false)
              document.getElementById("create").reset()
              router.reload();
          }
      }
      //Delete post from everywhere
      const deletePost = async (id) => {
        await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
            body: id
        })
      
        setPosts(profilePosts.filter((post) => post.id != id ))
      }

      const messageClass = {
        padding: 0
      }

      return (
        <Posts
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }} >
          {session.userId === profile.id && (
            <div>
              <input 
                placeholder="Click to add something new!" 
                value=""
                readOnly
                onClick={() => showCreate(true)}
                 />
            </div> 
              )}
          {profilePosts.length ? profilePosts.map((post) => {
                  return (
                      <Post key={post.id}>
                      <div>
                      <img src={post.author.image ? post.author.image : '/avatar.png'} />  
                      <Link href={`/profile/id=${post.authorId}`}
                      as={`/profile/${post.authorId}`}>
                          <h4>{post.author.name}</h4>
                      </Link>
                      </div>
                      <Link href={`/posts/id=${post.id}`} 
                      as={`/posts/${post.id}`}>
                        <p>{post.content}</p>
                      </Link>
                      <footer>
                        <small style={{"marginRight":"auto"}}>{post.comments.length} Comments</small>
                        <small>Posted <Moment fromNow>{post.createdAt}</Moment></small>
                       {post.authorId === session.userId && 
                         <FontAwesomeIcon onClick={() => deletePost(post.id)} icon={faTrash}/>
                       }
                      </footer>
                      </Post>
                  )
              }) : <Post style={{fontSize:'26px'}}>
                This is your feed! Displayed here will be all of your posts and the posts of the friends you have
                added! Post whatever comes to your mind...don't be shy!
              </Post>
          }
          <Form
           create={create}
           createPost={createPost} 
           content={content} 
           message={message} 
           messageClass={messageClass} 
           showCreate={showCreate} />
        </Posts>
    ) 
}

export default Feed