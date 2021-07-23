import makeAnimated from 'react-select/animated'
import Select from 'react-select'
import dynamic from 'next/dynamic';
import {languages, tools}  from '../../../data/data';
const Selection = dynamic(() => import('../../../styles/home').then((mod) => mod.Selections))

const Selections = ({ filteredLang, filteredTool, userLanguages, userTools}) => {
    const animatedComponents = makeAnimated()
    return (
        <Selection>
            <div>
            <label htmlFor="languages">Languages:</label>
            <Select
            id="selectLang"
            instanceId="selectLang"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={languages}
            defaultValue={filteredLang}
            ref={userLanguages}
            />
            </div>
            <div>
            <label htmlFor="tools">Tools:</label>
            <Select
            id="selectTool"
            instanceId="selectTool"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={tools}
            defaultValue={filteredTool}
            ref={userTools} 
            />
            </div>
        </Selection>
    )
}

export default Selections
