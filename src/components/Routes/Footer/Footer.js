import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

// import './Footer.css';

import img from '../../../assets/smedia/Facebook-icon.png';

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
              <NavLink className="navTextS glb_anim" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="m-auto">
              <NavLink className="navTextS glb_anim" href="/AboutUs/">
                About Us
              </NavLink>
            </NavItem>
            <NavItem className="m-auto">
              <NavLink className="navTextS glb_anim" href="/AttProf/">
                Attorney Profiles
              </NavLink>
            </NavItem>
            <NavItem className="m-auto">
              <NavLink className="navTextS glb_anim" href="/AoP/">
                Areas of Practice
              </NavLink>
            </NavItem>
            <NavItem className="m-auto">
              <NavLink className="navTextS glb_anim" href="/FAQ/">
                FAQ
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <hr className="lowerHR" />

        <div className="footDiv">
          <Container fluid>
            <Row className="footRow">
              <Col className="footName">
                <h1 className="footHead">
                  {' '}
                  <strong>Mandracchia Law</strong>{' '}
                </h1>
              </Col>
              <Col className="footName">
                <h3>
                  {' '}
                  <strong>Office Location</strong>{' '}
                </h3>
                <p>2024 Cressman Rd Skippack, Pennsylvania</p>
              </Col>
              <Col className="footName">
                <h3>
                  {' '}
                  <strong>Contact Us</strong>{' '}
                </h3>
                <p> 610.584.0700 </p>
              </Col>
              <Col>
                <a
                  href="https://www.facebook.com/pg/wwwmmattorneysdotcom/about/?ref=page_internal"
                  target="_blank"
                >
                  <img class="img foot_smedia" src={img} alt="facebook" />
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="middle_text">
                  Copyright © 2018 Mandracchia Law LLC. All Rights Reserved. ||
                  Design & Develeopment by:{' '}
                  <a
                    href="https://github.com/Serrowxd"
                    className="glb_anim"
                    target="_blank"
                  >
                    Kevin Jolley
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
