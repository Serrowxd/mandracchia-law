import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';

const Cards = props => {
  return (
    <Card className="mainCard">
      <CardImgOverlay className="cardOverlay">
        <CardTitle className="titleCard"> {props.title} </CardTitle>
        <Button color="danger" className="button">
          More Information
        </Button>
      </CardImgOverlay>
    </Card>
  );
};

export default Cards;
