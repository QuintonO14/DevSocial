import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion } from 'framer-motion'
const Basic = dynamic(() => import('./basic'))
const Selections = dynamic(() => import('./selections'))
const ListModal = dynamic(() => import('../../modal/modal'))
const DeleteAccount = dynamic(() => import('../../../styles/home').then((mod) => mod.DeleteAccount))
const FnF = dynamic(() => import('../../../styles/home').then((mod) => mod.FriendsAndFollowers))
const ProfileEdit = dynamic(() => import('../../../styles/home').then((mod) => mod.ProfileEdit))
const SaveProfile = dynamic(() => import('../../../styles/home').then((mod) => mod.SaveProfile))

const saveProfile = ({ about, data, email, deleteAccount, handleFile,
     file, filteredLang, filteredTool, message, name, updateProfile, userLanguages, userTools}) => {
        const [friends, showFriends] = useState(false)
        const [followers, showFollowers] = useState(false)
        const [deleting, showDelete] = useState(false)
        const [following, editFollow] = useState(false);

        //Get friends of user
        const getFriends = async () => {
            showFriends(true)
            showDelete(true)
          }
        
        //Get followers of user
        const getFollowers = async () => {
            showFollowers(true)
            editFollow(true)
            
            showDelete(true)
          }

        //Close function for all modals 
        const close = () => {
            showFollowers(false)
            showFriends(false)
            showDelete(false)
            editFollow(false)
        }        

        const messageClass = {
          backgroundColor: message === 'Profile Updated!' ? 'green' : 'red',
          color: 'white',
          textAlign: 'center',
        }

    return (
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }} 
      style={{background: 'rgba(50, 50, 50, 1)', height: 'auto'}}>
          <ProfileEdit>
            <p style={messageClass}>{message}</p>
            <Basic 
            about={about} 
            data={data} 
            email={email} 
            file={file}
            name={name}
            handleFile={handleFile} 
             />
            <FnF>
                <small onClick={data.friends.length ? getFriends : null}>
                  Following:{data.friends.length}
                </small>
                <small onClick={data.friendsRelation.length ? getFollowers : null}>
                  Followed By:{data.friendsRelation.length}
                </small>
            </FnF>
            <Selections 
            filteredLang={filteredLang} 
            filteredTool={filteredTool}
            userLanguages={userLanguages}
            userTools={userTools}
             />
             <SaveProfile onClick={updateProfile}>Save Profile</SaveProfile>
             <DeleteAccount onClick={() => deleteAccount(data.id)}>Delete Account</DeleteAccount>
             <ListModal
             friends={friends} 
             followers={followers} 
             profile={data}
             deleting={deleting}
             following={following}
             close={close}  /> 
        </ProfileEdit>
        </motion.div>
    )
}

export default saveProfile