import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Main.css';

import Cards from './Cards';

import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardGroup,
  Button,
} from 'reactstrap';

import img from '../../../../assets/cardimgs/top_left.png';
import img2 from '../../../../assets/cardimgs/top_left_2.png';
import img3 from '../../../../assets/cardimgs/top_left_3.png';
import img4 from '../../../../assets/cardimgs/top_left4.png';
import img5 from '../../../../assets/cardimgs/middle_left.png';
import img6 from '../../../../assets/cardimgs/middle_left2.png';
import img7 from '../../../../assets/cardimgs/middle_left3.png';
import img8 from '../../../../assets/cardimgs/middle_left4.png';
import img9 from '../../../../assets/cardimgs/bottom_left.png';
import img10 from '../../../../assets/cardimgs/bottom_left2.png';
import img11 from '../../../../assets/cardimgs/bottom_left3.png';
import img12 from '../../../../assets/cardimgs/bottom_left4.png';

class OldMain extends Component {
  state = { toggled: false };
  toggle = e => this.setState(state => ({ toggled: !state.toggled }));
  render() {
    return (
      <div>
        <h1 className="aopMain"> Areas of Practice </h1>
        <div>
          <CardGroup>
            <Card className="mainCard">
              <CardImg src={img} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Banking </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img2} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Civil Law </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img3} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Commercial </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img4} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Domestic Law </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card className="mainCard">
              <CardImg src={img5} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Elder Law </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img6} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard">
                  Employment and Labor Law
                </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img7} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Insurance Law </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img8} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard">
                  Intellectual Property
                </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card className="mainCard">
              <CardImg src={img9} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard">
                  Personal Injury Recovery
                </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img10} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Real Estate </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img11} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> Wills and Estates </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
            <Card className="mainCard">
              <CardImg src={img12} className="card_img" />
              <CardImgOverlay className="cardOverlay">
                <CardTitle className="titleCard"> More Info </CardTitle>
                <Button color="danger" className="button">
                  More Information
                </Button>
              </CardImgOverlay>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default OldMain;
