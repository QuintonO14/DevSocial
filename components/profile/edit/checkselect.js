import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion } from 'framer-motion'
const SelectDiv = dynamic(() => import('../../../styles/home').then((mod) => mod.SelectDiv))


const CheckSelect = ({language, checkTools, firstPage, checkLangs, key, selectTool, selectLang, tool}) => {
    const [checked, setChecked] = useState(false)

    return (
        <SelectDiv
         as={motion.div}
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 1.5}}
         checked={checked}
         key={key}>
        {firstPage == true ? (
        <label>{language.label}
            <input
            type="checkbox" 
            checked={checked}
            onClick={() => setChecked(!checked)}
            onChange={() => checked === false ? checkLangs([...selectLang, language.value]) 
                : checkLangs(checkedLangs.filter((lang) => lang.value))}
            
            /> 
        </label>
        ) : (
        <label>{tool.label}
            <input
            type="checkbox"
            checked={checked}
            onClick={() => setChecked(!checked)}
            onChange={() => checked === false ? checkTools([...selectTool, tool.value])
                : checkTools(checkedTools.filter((tool) => tool.value))}
             />
        </label>
        )}
        </SelectDiv>

    )

}
export default CheckSelect