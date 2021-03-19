import { Link } from 'react-router-dom';

import example from '../../assets/example.png';

import './PostCard.css';

const PostCard = (props) => {


    return(
        <Link to={{ pathname:"/game/"+String(props.post.gameId)}} className="link">
            <div className="card-container">
                <div className="card-img-container">
                    <img className="card-img" src={example}/>
                </div>
                <div className="card-content">
                    
                        <h1 className="card-title">{props.post.title}</h1>
                    
                    <h1 className="card-desc">sdf</h1>
                </div>
            </div>
        </Link>
    )
}

export default PostCard