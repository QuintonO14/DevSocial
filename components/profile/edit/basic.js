import dynamic from 'next/dynamic'
const FormFile = dynamic(() => import('../../../styles/home').then((mod) => mod.FormFile))
const FormImage = dynamic(() => import('../../../styles/home').then((mod) => mod.FormImage))
const FormLabel = dynamic(() => import('../../../styles/home').then((mod) => mod.FormLabel))

const Basic = ({about, data, email, file, handleFile, name}) => {
    
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
            <FormLabel htmlFor="file">Profile Picture:</FormLabel>
            <FormImage>
                <img src={file ? URL.createObjectURL(file) : data.image} 
                placeholder="Choose Some Files" alt={file ? file : null} />
                <FormFile type="file" accept=".jpeg, .png, .jpg" onChange={handleFile} />
            </FormImage>    
        </div> 
        
    )
}

export default Basic