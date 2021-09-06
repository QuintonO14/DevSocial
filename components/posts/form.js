import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'
const Overlay = dynamic(() => import('../../styles/home').then((mod) => mod.Overlay))
const PostButton1 = dynamic(() => import('../../styles/home').then((mod) => mod.PostButton1))
const PostButton2 = dynamic(() => import('../../styles/home').then((mod) => mod.PostButton2))
const PostForm = dynamic(() => import('../../styles/home').then((mod) => mod.PostForm))

const Form = ({create, createPost, content, message, messageClass, showCreate}) => {
    return (
        <AnimatePresence>
        {create === true && (
          <>
          <PostForm 
          as={motion.form}
          id="create"
          key="modal"
          onSubmit={createPost}
          initial={{y: 0}}
          animate={{y: 200}}
          exit={{y: -200}}
          >
             {message ? <p style={messageClass}>{message}</p> : null}
            <textarea
            ref={content} 
            rows={5}
            pattern="\S+"
            minLength={1}
            id="content"
            placeholder="What do you want to say?" 
            onClick={() => showCreate(true)} 
            >
            </textarea>
            <div>
              <PostButton1 onClick={() => showCreate(false)}>Cancel</PostButton1>
              <PostButton2 type="submit">Publish</PostButton2>
            </div>
        </PostForm>
        <Overlay onClick={() => showCreate(false)} />
        </>
        )}
        </AnimatePresence>
    )
}

export default Form;