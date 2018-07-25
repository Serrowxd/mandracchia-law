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
      title: 'Areas of Practice',
    };
  }

  handleClick(compName, compTitle, e) {
    console.log(compName);
    this.setState({ comp: compName });
    this.setState({ title: compTitle });
  }

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <Container fluid className="upperCon">
          {/* <h1 className="centerH"> Areas of Practice </h1> */}
          <h1 className="centerH"> {this.state.title} </h1>
          <Row>
            <Col sm={{ size: 2, offset: 0 }}>
              <ListGroup flush>
                <ListGroupItem
                  onClick={this.handleClick.bind(
                    this,
                    <Holder />,
                    'Areas of Practice'
                  )}
                  tag="a"
                  href="#"
                >
                  Main
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(
                    this,
                    <Civil />,
                    'Civil Litigation'
                  )}
                  tag="a"
                  href="#"
                >
                  Civil Litigation
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Traffic />, 'Traffic')}
                  tag="a"
                  href="#"
                >
                  Traffic Matters
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(
                    this,
                    <Personal />,
                    'Personal'
                  )}
                  tag="a"
                  href="#"
                >
                  Personal Injury
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(
                    this,
                    <Criminal />,
                    'Criminal'
                  )}
                  tag="a"
                  href="#"
                >
                  Criminal
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(
                    this,
                    <Domestic />,
                    'Domestic'
                  )}
                  tag="a"
                  href="#"
                >
                  Domestic
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(this, <Estates />, 'Estates')}
                  tag="a"
                  href="#"
                >
                  Wills & Estates
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(
                    this,
                    <RealEstate />,
                    'RealEstate'
                  )}
                  tag="a"
                  href="#"
                >
                  Real Estate
                </ListGroupItem>
                <ListGroupItem
                  onClick={this.handleClick.bind(
                    this,
                    <Commercial />,
                    'Commerical'
                  )}
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
