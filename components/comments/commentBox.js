import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import dynamic from 'next/dynamic'
import TextareaAutosize from "react-textarea-autosize"
const CommentForm = dynamic(() => import('../../styles/home').then((mod) => mod.CommentForm))

const CommentBox = ({addComment, handleChange}) => {
    return (
        <CommentForm onSubmit={addComment} autoComplete="off">
            <TextareaAutosize
            id="comment"
            onChange={handleChange}
            type="text"
            maxLength={500}
            placeholder='What Do you have to say?'
            required>
            </TextareaAutosize>
            <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </CommentForm>
    )
}

export default CommentBox