import React from 'react';
import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
  Button,
} from 'reactstrap';

const Cards = props => {
  return (
    <Card className="mainCard">
      <CardImg src={props.cardimg} className="card_img" />
      <CardImgOverlay className="cardOverlay">
        <CardTitle className="titleCard"> {props.title} </CardTitle>
        <CardText>
          <p className="small_text">
            {props.text} <br />
            {props.text2} <br />
            {props.text3} <br />
            {props.text4}
          </p>
        </CardText>
        <Button color="danger" className="button new">
          More Information
        </Button>
      </CardImgOverlay>
    </Card>
  );
};

export default Cards;
