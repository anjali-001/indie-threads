import React from "react";
import {Card} from 'react-bootstrap'

import { Link } from "react-router-dom";

function UserCommunityCard(props) {

  return (
      <div className="userCommunityCard col-lg-3 col-md-4 col-sm-6 col-12">
        <Card className="userCommunityCard__card">
          <Card.Body>
            <Link to={{ pathname:"/game/"+String(props.item.gameId)}} className="userCommunityCard__card--link">
            <h4 className="card__title">{props.item.title}</h4>
            </Link>
            <Card.Subtitle className="text-muted d-flex">
              {props.item.genre.map(res => 
                <p key={res} className="mr-1 userCommunityCard__genre">{res}</p>
              )}
            </Card.Subtitle>
            <Card.Text className="card__text">
              {props.item.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
  );
}

export default UserCommunityCard;

