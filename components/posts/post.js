import Moment from 'react-moment'
import dynamic from 'next/dynamic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Comments = dynamic(() => import('../comments/comments'))
const CommentBox = dynamic(() => import('../comments/commentBox'))
const Error = dynamic(() => import('../../styles/home').then((mod) => mod.Error))

const Post = ({addComment, deletePost, edit, editRef, handleChange, message, post, save, session}) => {
    return (
        <>
                <p 
                id="postEdit"
                ref={editRef}
                onBlur={save} 
                contentEditable={edit === true ? true : false}
                suppressContentEditableWarning={true}>
                    {post.content}
                </p>
                {session.userId === post.authorId ?
                    <FontAwesomeIcon icon={faTrash} onClick={deletePost} />
                : null}
                <small><Moment fromNow>{post.createdAt}</Moment></small>
                <hr />
                <CommentBox addComment={addComment} message={message} handleChange={handleChange} />
                <Comments post={post} session={session} />
        </>
    )
}

export default Post