import { useState } from 'react';
import { Redirect } from 'react-router';

import InputField from '../../components/InputField';
import addPost from '../../constants/fire-functions/addPost';

import './Post.css'

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
    const [posted, setPosted] = useState(false)


    const submitPost = async (e) => {
        e.preventDefault();
        addPost(title, desc, genre.split(","), 
                developer, relDate, link, video, pictures.split("\n"),
                sysReq, platforms).then((resp) => {
                    setPosted(true)
                })
    }
    if (posted) return <Redirect to="/explore"/>
    return(
        <div className="post-container">
             <section className="post-section">
             <div className="postForm">
                <InputField name="Title" setField={settitle} autofocus="true" />
                <label>Description </label>
                <textarea type="text"
                    required
                />
                <InputField name="Genre (Seperate with commas)" setField={setGenre}/>
                <InputField name="Developer" setField={setDeveloper}/>
                <InputField name="Release Date" setField={setRelDate}/>
                <InputField name="Website Link (if any)" setField={setLink}/>
                <InputField name="Video Link" setField={setVideo}/>
                <label>Pictures (Separate with new lines)</label>
                <textarea type="text"
                    required
                    onChange={(e) => setpictures(e.target.value)}
                />
                <label>System Requirements </label>
                <textarea type="text"
                    required
                    onChange={(e) => setSysReq(e.target.value)}
                />
                <label>Platforms available </label>
                <textarea type="text"
                    required
                    onChange={(e) => setPlatforms(e.target.value)}
                />
                <div className="btnContainer">
                    <button onClick={(e) => submitPost(e)}>Post!</button>
                </div>
            </div>
             </section>
        </div>
    )
}

export default Post