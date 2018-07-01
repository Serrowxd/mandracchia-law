import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardGroup,
  Button,
} from 'reactstrap';

const Cards = props => {
  return (
    <Card className="mainCard">
      <CardImg width="100%" alt="tmp img" />
      <CardImgOverlay className="cardOverlay">
        <CardTitle className="titleCard"> {props.title} </CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default Cards;
