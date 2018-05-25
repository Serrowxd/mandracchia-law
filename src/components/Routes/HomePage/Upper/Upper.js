import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Upper.css';

class Upper extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2> Henlo (OvO") </h2>
            </Col>
            <Col>
              <h1> Areas of Practice </h1>
              <ul>
                <li> Banking </li>
                <li> Civil Law </li>
                <li> Commercial </li>
                <li> Criminal Law </li>
                <li> Domestic Law </li>
                <li> Elder Law </li>
                <li> Employment and Labor Law </li>
                <li> Insurance Law </li>
                <li> Intellectual Property </li>
                <li> Personal Injury Recovery </li>
                <li> Real Estate </li>
                <li> Wills and Estates </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Upper;
