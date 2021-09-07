import Moment from 'react-moment'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
const Comment = dynamic(() => import('../../styles/home').then((mod) => mod.Comment))
const Error = dynamic(() => import('../../styles/home').then((mod) => mod.Error))
const ReadMoreLess = dynamic(() => import('../../styles/home').then((mod) => mod.ReadMoreLess))

const SoloComment = ({comment, post, deleteComment, comRef, session}) => {
    const [edit, editing] = useState(false);
    const [tool, isVisible] = useState(false);
    const [readMore, isReadMore] = useState(false);
    const [message, setMsg] = useState(null)
    const [editComment, setComment] = useState(comment.comment)
    const commentRef = useRef(null);
   
    //Set tooltip visibility to avoid dangerousHTML warning
    setTimeout(() => {
        isVisible(true)
    }, 1000)
  
    //Update comment inline
    const updateComment = async () => { 
        if(!commentRef.current.innerText.trim().length) {
            setMsg(`Comments can't be left blank`)
            setTimeout(() => {
                setMsg(null)
            }, 2000)
        } else {
        const newComm = {
            id: comment.id,
            comment: commentRef.current.innerText.trim(),
            createdAt: comment.createdAt
        }
        await fetch(`/api/comments/comment`, {
            method: 'PATCH',
            body: JSON.stringify(newComm)
          })
        }
    }

      //Focus on input 
      if(edit === true) {
        setTimeout(() => {
            document.getElementById(comment.id).focus()
        }, 100)
    }

    return (
    <Comment key={comment.id}>
                    {message && <Error>{message}</Error>}
                    {tool === true && <ReactTooltip />}
                   <div>
                      <Link href={`/profile/${comment.authorId}`}>
                        <img src={comment.author.image ? comment.author.image : '/avatar.png'} />
                      </Link>
                      <h5>{comment.author.name}</h5>
                   </div>
                      {session.userId === comment.authorId && edit === true ? (
                        <>
                         <p
                         id={comment.id}
                         ref={commentRef}
                         onBlur={updateComment}
                         contentEditable="true"
                         suppressContentEditableWarning="true"
                         >
                            {editComment}
                        </p>
                       </>
                    ) : (
                    readMore === false ? (
                    <>
                        <p id={comment.id}>
                            {comment.comment.slice(0,200)}
                            {comment.comment.length > 200 && ( 
                        <ReadMoreLess onClick={() => isReadMore(true)}>
                            More...
                        </ReadMoreLess>
                        )}
                        </p>
                        
                    </>
                    ) : (
                    <>
                        <p id={comment.id}>
                            {comment.comment}
                            {comment.comment.length > 200 && (
                        <ReadMoreLess onClick={() => isReadMore(false)}>
                            Less...
                        </ReadMoreLess>
                        )} 
                        </p>
                    </>
                    ))}
                    <small><Moment fromNow>{comment.createdAt}</Moment></small>
                    {session.userId === comment.authorId || session.userId === post.authorId ?
                    <>
                    <FontAwesomeIcon 
                    icon={faTrash}
                    data-tip="Delete Comment" 
                    onClick={() => deleteComment(comment.id)} />
                    <FontAwesomeIcon 
                    icon={faEdit}
                    data-tip="Edit Comment" 
                    onClick={() => editing(!edit)} /> 
                    </>
                    : null}    
    </Comment>
    )
}

export default SoloComment