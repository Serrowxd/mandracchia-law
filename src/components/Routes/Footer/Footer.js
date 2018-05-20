import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

// Footer Routes?

class Footer extends Component {
  render() {
    return (
      <div>
        <h2 className="centerH"> Footer Routes Go Here </h2>
        <hr />
        <Container>
          <Row>
            <Col className="footName">
              <h1> Mandracchia Law </h1>
            </Col>
            <Col className="footName">
              <h3> Office Location </h3>
              <p>Location</p>
              <p>Location</p>
              <p>Location</p>
              <p>Location</p>
            </Col>
            <Col className="footName">
              <h3> Contact Us </h3>
              <p> PHONE NUMBER </p>
              <p> MAP/DIRECTIONS </p>
            </Col>
            <Col>
              <p> SOCIAL MEDIA </p>
              <p> SOCIAL MEDIA </p>
              <p> SOCIAL MEDIA </p>
            </Col>
            <Col>
              <p> SOCIAL MEDIA </p>
              <p> SOCIAL MEDIA </p>
              <p> SOCIAL MEDIA </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
