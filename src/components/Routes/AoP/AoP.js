import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Route } from 'react-router';

import './AoP.css';

// Route Imports
import Civil from './aoproutes/civil';
import Traffic from './aoproutes/traffic';
import Personal from './aoproutes/personal';
import Criminal from './aoproutes/criminal';
import Domestic from './aoproutes/domestic';
import RealEstate from './aoproutes/realestate';
import Commercial from './aoproutes/commerical';
import Estates from './aoproutes/estates';

import Holder from './aoproutes/holder';

import Contact from '../../Contact/Contact';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';

class AoP extends Component {
  constructor() {
    super();
    this.state = {
      comp: <Holder />,
      content: 'Henlo (OvO")',
    };
  }

  handleClick(compName, e) {
    console.log(compName);
    this.setState({ comp: compName });
  }
  // _renderSubComp() {
  //   switch (this.state.render) {
  //     case 'civil':
  //       return <Civil />;
  //   }
  // }

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <Container fluid className="upperCon">
          <h1 className="centerH"> Areas of Practice </h1>
          <Row>
            <Col sm={{ size: 2, offset: 0 }}>
              <ListGroup flush>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Holder />)}
                  tag="a"
                  href="#"
                >
                  Main
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Civil />)}
                  tag="a"
                  href="#"
                >
                  Civil Litigation
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Traffic />)}
                  tag="a"
                  href="#"
                >
                  Traffic Matters
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Personal />)}
                  tag="a"
                  href="#"
                >
                  Personal Injury
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Criminal />)}
                  tag="a"
                  href="#"
                >
                  Criminal
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Domestic />)}
                  tag="a"
                  href="#"
                >
                  Domestic
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Estates />)}
                  tag="a"
                  href="#"
                >
                  Wills & Estates
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <RealEstate />)}
                  tag="a"
                  href="#"
                >
                  Real Estate
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Commercial />)}
                  tag="a"
                  href="#"
                >
                  Commercial
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col sm={{ size: 7, offset: 0 }}>{this.state.comp}</Col>
            <Col sm={{ size: 3, offset: 0 }}>
              <Contact />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default AoP;
