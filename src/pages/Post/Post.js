import react from  'react'
import './Post.css'
import '../Login/Style.css'

const Post = () => {
    return(
        <div className="post-container">
             <section className="login">
             <div className="loginContainer">
                <label>Email</label>
                <input type="text"
                    autoFocus
                    required
                />
            </div>
             </section>
        </div>
    )
}

export default Post