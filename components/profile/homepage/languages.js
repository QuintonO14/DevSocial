import dynamic from 'next/dynamic'
const LangTools = dynamic(() => import('../../../styles/home').then((mod) => mod.LangTools))
const Tags = dynamic(() => import('../../../styles/home').then((mod) => mod.Tags))

const Languages = ({profile, session}) => {
    //Map languages into object for Tagcloud 
    const lang =  profile.languages.map((language) => {
        return {value: language, count: Math.floor(Math.random() * 6) + 1}
    })
    //Map tools into object for Tagcloud
    const tools = profile.tools.map((tool) => {
        return {value: tool, count: Math.floor(Math.random() * 6) + 1}
    })
    //Merge arrays of objects into array for Tagcloud
    const toolsAndLangs = lang.concat(tools)

    return (
      <LangTools>
       {profile.languages.length > 0 ? (
            <Tags tags={toolsAndLangs}  minSize={14} maxSize={26} />
       ) : (
          profile.id === session.userId ? (
          <p>You have not selected any languages or tools that you use yet! Click Edit Profile to get started</p>
          ) : 
          <p>{profile.name + ' has not selected any languages or tools that they use, check back again soon!'}</p> 
       )}
      </LangTools>
    )
}

export default Languages