import react from 'react';
import './PostCard.css'
import example from '../../assets/example.png'

const PostCard = (props) => {


    return(
        <div className="card-container">
            <div className="card-img-container">
                <img className="card-img" src={example}/>
            </div>
            <div className="card-content">
                <h1 className="card-title">{props.post.title}</h1>
                <h1 className="card-desc">sdf</h1>
            </div>
        </div>
    )
}

export default PostCard