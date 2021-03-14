import React from "react";
import {Card} from 'react-bootstrap'


function UserCommunityCard(props) {
  // console.log("hello", props.title)
  return (
    <div className="userCommunityCard col-lg-3 col-md-4 col-sm-6 col-12">
      <Card className="userCommunityCard__card">
        <Card.Body>
          <h4 className="card__title">{props.item.title}</h4>
          <Card.Subtitle className="text-muted d-flex">
            {props.item.genre.map(res => 
              <p className="mr-1 userCommunityCard__genre">{res}</p>
            )}
          </Card.Subtitle>
          <Card.Text className="card__text">
            {props.item.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div> 
  );
}

export default UserCommunityCard;

