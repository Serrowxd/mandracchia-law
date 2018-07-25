import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import './FAQ.css';

import Contact from '../../Contact/Contact';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';

class FAQ extends Component {
  state = {
    filler: [
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    ],
  };
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <Container fluid className="upperCon">
          <h1 className="centerH"> Frequently Asked Questions Go Here </h1>
          <Row>
            <Col sm={{ size: 7, offset: 1 }}>
              <p>{this.state.filler}</p>
              <p>{this.state.filler}</p>
              <p>{this.state.filler}</p>
            </Col>
            <Col sm={{ size: 4, offset: 0 }}>
              <Contact />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default FAQ;
