import dynamic from 'next/dynamic'
import { useS3Upload } from 'next-s3-upload'
import ReactTooltip from 'react-tooltip'
import { useState } from 'react'
const FormFile = dynamic(() => import('../../../styles/home').then((mod) => mod.FormFile))
const FormImage = dynamic(() => import('../../../styles/home').then((mod) => mod.FormImage))
const FormLabel = dynamic(() => import('../../../styles/home').then((mod) => mod.FormLabel))

const Basic = ({about, data, email, file, handleFile, name}) => {
    let { FileInput, openFileDialog } = useS3Upload();
    const [tool, setTool] = useState(false)
    setTimeout(() => {
        setTool(true)
    }, 100)

    return (
        <div>
            <FormLabel htmlFor="name">Name:
            <input type="text" ref={name}  defaultValue={data.name} required/>
            </FormLabel>
            <FormLabel htmlFor="email">Email:
            <input type="email" ref={email} id="email" defaultValue={data.email}/>
            </FormLabel>
            <FormLabel htmlFor="about">About You:
            <textarea 
            maxLength={500} 
            rows={6} 
            placeholder="Tell everyone about yourself in 500 characters or less!"
            ref={about}
            defaultValue={data.about}
            >
            </textarea>
            </FormLabel>
            {tool === true && <ReactTooltip />}
            <FormLabel htmlFor="file">Profile Picture:</FormLabel>
            <FormImage>
                <img data-tip="Click to upload" onClick={openFileDialog} src={file ? file : (data.image ? data.image : '/avatar.png')} 
                placeholder="Choose Some Files" alt={file ? file : null} />
                <FileInput type="file" accept=".jpeg, .png, .jpg" onChange={handleFile} />
            </FormImage>    
        </div> 
        
    )
}

export default Basic