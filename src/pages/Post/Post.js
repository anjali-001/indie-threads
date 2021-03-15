import react from  'react'
import './Post.css'
import InputField from '../../components/InputField'
import { useState } from 'react'
import { fromPromise } from 'apollo-link'

const Post = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [genre, setGenre] = useState("")
    const [developer, setDeveloper] = useState("")
    const [relDate, setRelDate] = useState("")
    const [link, setLink] = useState("")
    const [video, setVideo] = useState("")
    const [pictures, setpictures] = useState("")
    const [sysReq, setSysReq] = useState("")
    const [platforms, setPlatforms] = useState("")

    return(
        <div className="post-container">
             <section className="post-section">
             <div className="postForm">
                <InputField name="Title" setField={settitle}/>
                <label>Description </label>
                <textarea type="text"
                    autoFocus
                    required
                />
                <InputField name="Genre (Seperate with commas)" setField={setGenre}/>
                <InputField name="Developer" setField={setDeveloper}/>
                <InputField name="Release Date" setField={setRelDate}/>
                <InputField name="Website Link (if any)" setField={setLink}/>
                <InputField name="Video Link" setField={setVideo}/>
                <label>Pictures (Separate with new lines)</label>
                <textarea type="text"
                    autoFocus
                    required
                    onChange={(e) => setpictures(e.target.value)}
                />
                <label>System Requirements </label>
                <textarea type="text"
                    autoFocus
                    required
                    onChange={(e) => setSysReq(e.target.value)}
                />
                <label>Platforms available </label>
                <textarea type="text"
                    autoFocus
                    required
                    onChange={(e) => setPlatforms(e.target.value)}
                />
                <div className="btnContainer">
                    <button>Post!</button>
                </div>
            </div>
             </section>
        </div>
    )
}

export default Post