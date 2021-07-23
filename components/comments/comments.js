import SoloComment from './soloComment'
import { useState } from 'react';

const Comments = ({ post,  session }) => {
    const [comments, setComments] = useState(post.comments)
  
    //Delete comment from everything
    const deleteComment = async (id) => {
        await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
            body: id
        })
        setComments(comments.filter((comment) => comment.id != id))
    }

    return (
    <>
        {comments ? comments.map((comment) => {    
            return (
              <SoloComment
               key={comment.id}
               comment={comment}
               deleteComment={deleteComment}
               session={session}
               post={post}
               /> 
            )
        }) : <p>No Comments Available</p>}
        </>
    )
}

export default Comments;