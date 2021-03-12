import React from "react";
import {Card} from 'react-bootstrap'

function UserCommunityCard() {
  return (
    <div className="userCommunityCard m-5 d-flex">
      <Card className="userCommunityCard__card mr-5">
        <Card.Body>
          <h3>Among Us</h3>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text className="pb-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="userCommunityCard__card" style={{overflow:"hidden"}}>
        <Card.Body>
          <h3>Assasins Creed</h3>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text className="pb-5">
            Some quick example text to build on the card title and make up
            bulk of the card's content. bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCommunityCard;

