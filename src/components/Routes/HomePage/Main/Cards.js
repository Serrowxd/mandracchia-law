import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';

import img from './placeholder.png';

const Cards = props => {
  return (
    <Card className="mainCard">
      <CardImg src={props.cardimg} className="card_img" />
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
