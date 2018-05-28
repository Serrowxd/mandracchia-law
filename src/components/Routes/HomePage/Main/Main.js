import React, { Component } from 'react';
import './Main.css';

import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardGroup,
} from 'reactstrap';

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="aopMain"> Areas of Practice </h1>
        <div>
          <CardGroup>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Banking </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Civil Law </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Commercial </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Domestic Law </CardTitle>
              </CardImgOverlay>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Elder Law </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard">
                  Employment and Labor Law
                </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Insurance Law </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard">
                  Intellectual Property
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard">
                  Personal Injury Recovery
                </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Real Estate </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Wills and Estates </CardTitle>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg width="100%" alt="tmp img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> More Info </CardTitle>
              </CardImgOverlay>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default Main;
