import React, {useContext, useState, useEffect, useRef} from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import fire from '../../fire';
import firebase from 'firebase'
import { AuthContext } from '../../auth';
import './Community.css';

const TAG2COLORS = {
    Action: "#E07F38",
    Adventure:"#3871E0",
    Casual:"#6238E0",
    Multiplayer:"#42281D",
    Racing:"#8F2A22",
    RPG:"#3D5447",
    Simulations:"#4E558F",
    Sports:"#1E8F31",
    Strategy:"#474747",
    Indie: "#2CB67D"
}

const Tag = (props) => {
    
    let color = "#2CB67D"
    if(TAG2COLORS[props.value]){
        color = TAG2COLORS[props.value]
    }

    return(
        <div className="tag" style={{background: color}}>
            {props.value}
        </div>
    )
}

const Comment = (props) => {
    return(
        <div className="comment">
            <div className="game-icon" />
            <div className="comment-text">
                {props.value}
            </div>
        </div>
    )
}

const Community = (props) => {

    const currentUser = useContext(AuthContext);
    const [formValue, setFormValue] = useState('');
    const [user, setUser] = useState(null);

    const dummy = useRef();
    const commentsRef = fire.firestore().collection("comments");
    const query = commentsRef.orderBy("createdAt").where('gameId', '==', props.location.props.gameId);
    console.log(
        "Messages", useCollectionData(query)
    )
    const [messages] = useCollectionData(
        query, 
        { idField: 'id' }
    );

    useEffect(() => {
        const userRef = fire.firestore().collection("posts");
        const userdata = async () => {
            const data = await userRef.get()
            data.forEach(doc => {
                if(doc.id === props.location.props.gameId){
                    // console.log(doc.id, '=>', doc.data());
                    setUser(doc.data());
                }
                
            });          
    
        };
        userdata();
        // setUser(response.user);
    }, [])
    
    const spinner = (
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    )
    
    if(user == null){
        return(
            <div className="home componentContainer">
                <div className="localContainer">
                    <div className="spinner-Container">
                        {spinner}
                    </div>
                </div>            
            </div>
        )
    }


    // console.log("Messages", query)
  const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = currentUser.currentUser;
        console.log('UID: ', {
            text: formValue,
            replyTo: "",
            gameId:props.location.props.gameId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            author:currentUser.currentUser.email,
            userId: uid 
        })

        await commentsRef.add({
            text: formValue,
            replyTo: "",
            gameId:props.location.props.gameId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            author:currentUser.currentUser.email,
            userId: uid 
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    const sysReq = user.systemRequirements.split(';').map((value) => {
        return(
            <div className="info-details" key={value.trim()}>
                {value.trim()}
            </div>
        )
    })

    const renderTags = user.genre.map((value) => {
        return (
            <Tag key={value} value={value} />
        )
    })
    
    return (
        <>
            <div className="home componentContainer">
                <div className="localContainer">
                    
                    <div className="header">
                        <div className="game-icon" />
                        <div className="sub-header">
                            <h1 className="title">
                                {user.title}
                            </h1>
                            <div className="sub-title">
                                {user.releaseDate}
                                <div className="tags-section">
                                    {renderTags}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="media-section">
                        <div className="section-img__1" />
                        <div className="section-img__2" />
                        <div className="section-video" />
                    </div>

                    <div className="info-section">
                        <div className="info__1">
                            <div className="info-details">
                                <span>Developer:</span> {user.developer}
                            </div>
                            <div className="info-details">
                                Page Author: {user.author}
                            </div>
                            <div className="info-details">
                                Supported Platform: {user.platformsAvailable}
                            </div>
                            <div className="info-details">
                                Website: <a href={user.website} target="#">{user.website}</a>
                            </div>

                        </div>
                        <div className="info__2">
                            <div className="info-details">
                                Systems Requirements:
                            </div>
                            <div className="info-details">
                                {sysReq}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="comments-section">
                    <div className="create-comment">
                        <div className="create-button">
                          <svg width="73" height="69" viewBox="0 0 73 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.7095 8.00001C24.7095 3.58173 28.2912 0 32.7095 0H40.0203C44.4386 0 48.0203 3.58172 48.0203 8V19.1939C48.0203 21.7775 46.7726 24.202 44.6702 25.7037L41.1561 28.2138C38.4194 30.1686 34.7524 30.203 31.9795 28.3L28.1827 25.6944C26.0087 24.2024 24.7095 21.735 24.7095 19.0983V8.00001Z" fill="#6238E0"/>
                                <path d="M48.02 61C48.02 65.4183 44.4383 69 40.02 69H32.7092C28.2909 69 24.7092 65.4183 24.7092 61L24.7092 49.8061C24.7092 47.2225 25.9569 44.798 28.0593 43.2963L31.5734 40.7862C34.31 38.8314 37.9771 38.797 40.75 40.7L44.5468 43.3056C46.7208 44.7976 48.02 47.265 48.02 49.9017V61Z" fill="#6238E0"/>
                                <path d="M8.00001 45.9223C3.58173 45.9223 0 42.3406 0 37.9223L0 30.6115C0 26.1932 3.58172 22.6115 8 22.6115H19.1939C21.7775 22.6115 24.202 23.8592 25.7037 25.9616L28.2138 29.4757C30.1686 32.2123 30.203 35.8794 28.3 38.6523L25.6944 42.449C24.2024 44.6231 21.735 45.9223 19.0983 45.9223H8.00001Z" fill="#6238E0"/>
                                <path d="M64.9629 22.6115C69.3812 22.6115 72.9629 26.1932 72.9629 30.6115V37.9223C72.9629 42.3406 69.3812 45.9223 64.9629 45.9223H53.769C51.1854 45.9223 48.7608 44.6746 47.2592 42.5722L44.7491 39.0581C42.7943 36.3215 42.7599 32.6544 44.6629 29.8815L47.2685 26.0847C48.7604 23.9107 51.2278 22.6115 53.8646 22.6115L64.9629 22.6115Z" fill="#6238E0"/>
                            </svg>

                        </div>
                        <form onSubmit={sendMessage}>
                            <button type="submit" disabled={!formValue}>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.0001 1L15.8501 19.15"  stroke="#94A1B2" strokeWidth="2"    strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M34 1L22.45 34L15.85 19.15L1 12.55L34 1Z" stroke="#94A1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Start a discussion" />
                        </form>
                    </div>
                    

                    <div className="comments">
                        
                        {/* <Comment value="hello world"/>
                        <Comment value="quick brown fox jumps over the lazy dog"/>
                        <Comment value="hello world"/> */}
                        {messages && messages.map(msg => <Comment key={msg.id} value={msg.text} />)}

                        <span ref={dummy}></span>

                    </div>
                </div>                
            </div>
        </>
    )
}

export default Community;