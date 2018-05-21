import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import './Footer.css';

// Footer Routes?

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          light
          expand="md"
          className="ml-auto d-none d-lg-block"
        >
          <Nav className="ml-auto" navbar>
            <NavItem className="m-auto">
              <NavLink className="navTextS" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="m-auto">
              <NavLink className="navTextS" href="/AboutUs/">
                About Us
              </NavLink>
            </NavItem>
            <NavItem className="m-auto">
              <NavLink className="navTextS" href="/AttProf/">
                Attorney Profiles
              </NavLink>
            </NavItem>
            <NavItem className="m-auto">
              <NavLink className="navTextS" href="/AoP/">
                Areas of Practice
              </NavLink>
            </NavItem>
            <NavItem className="m-auto">
              <NavLink className="navTextS" href="/FAQ/">
                FAQ
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <hr />

        {/* Commenting out the below section until I am able to properly align it. */}

        {/* <div>
          <Container>
            <Row className="footRow">
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
        </div> */}
      </div>
    );
  }
}

export default Footer;
