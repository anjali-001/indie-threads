import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import gql from 'graphql-tag'

const Form = () => {

    const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    console.log(content)

    function submit (e) {
        console.log(content)
    }
    
    return (
        <div>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1} // tabIndex of textarea
		onBlur={newContent => setContent(newContent.target.innerHTML)}
                onChange={newContent => {}}
            />
            <button onClick={(e) => {submit(e)}}>Submit</button>
        </div>
    )
}

export default Form
