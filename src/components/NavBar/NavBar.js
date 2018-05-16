import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Container className="navContainer">
        <Row>
          <Col className="navTitle">
            <h2>Mandracchia Law</h2>
          </Col>
          <Link to={'/'}>
            <h4 className="buttons">Home</h4>
          </Link>
          <Link to={'/AboutUs'}>
            <h4 className="buttons">About Us</h4>
          </Link>
          <Link to={'/AttProf'}>
            <h4 className="buttons">Attorney Profiles</h4>
          </Link>
          <Link to={'/AoP'}>
            <h4 className="buttons">Areas of Practice</h4>
          </Link>
          <Link to={'/FAQ'}>
            <h4 className="buttons">FAQ</h4>
          </Link>
        </Row>
      </Container>
    );
  }
}

export default NavBar;
