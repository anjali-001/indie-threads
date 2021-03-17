import React, {useEffect, useState} from "react";
import {Card} from 'react-bootstrap'
import firebase from 'firebase'
import fire from '../../fire'

function UserCommunityCard(props) {

  const [data, setdata] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
      // const getData = async () => {
        const data = fire.firestore().collection("posts").doc(props.item.id).get();
        setdata(data)
        console.log(data)
      // }
  }, [])

  

  return (
    <div className="userCommunityCard col-lg-3 col-md-4 col-sm-6 col-12">
      <Card className="userCommunityCard__card">
        <Card.Body>
          <h4 className="card__title">{loading ? "hi" : "sdf"}</h4>
          <Card.Subtitle className="text-muted d-flex">
            {data.genre.map(res => 
              <p className="mr-1 userCommunityCard__genre">sdfsdf</p>
            )}
          </Card.Subtitle>
          <Card.Text className="card__text">
            sdf
          </Card.Text>
        </Card.Body>
      </Card>
    </div> 
  );
}

export default UserCommunityCard;

