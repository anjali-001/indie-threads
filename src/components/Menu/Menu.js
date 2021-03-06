import React, { useState, useEffect} from 'react';
import getUser from '../../constants/fire-functions/getUser/getUser';
import addPost from '../../constants/fire-functions/addPost/addPost';

const Menu = () => {

    const [data, setData] = useState(null);

    const getUserInfo = async () => {
  
      await addPost("demo", ["horror", "comedy"], "no requirements");
    }

    return (
     <div>
        <button onClick={getUserInfo}>hi</button>
        {data == null ? <h1>hi</h1> : <h1>bye</h1>}
     </div>
    )
  }

export default Menu