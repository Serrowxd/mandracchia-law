import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './AttProf.css';

import imgChris from '../../../assets/lawyerimgs/cm pic.jpg';
import imgCharles from '../../../assets/lawyerimgs/Mandracchia_0091.jpg';
import imgJeff from '../../../assets/lawyerimgs/Soderberg_0107.jpg';

import Contact from '../../Contact/Contact';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';

class AttProf extends Component {
  state = {
    filler: [
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    ],
  };
  render() {
    return (
      <div className="att_prof_page">
        {/* <NavBar /> */}
        <RSNav />

        <Container fluid className="att_prof_cont">
          <Row className="mainThin att_prof_cont">
            <h2 className="dumb_h2"> Pennsylvania Legal Representation </h2>
          </Row>

          <Row className="mainThin att_prof_cont_foot">
            <h2 className="dumb_h2 thesecond"> We Fight for You! </h2>

            {/* <p> {this.state.filler} </p> */}
          </Row>

          <Row className="white_row">
            <Col sm={{ size: 3, offset: 1 }} className="att_prof_col">
              <h1> Charles D. Mandracchia </h1>
              <a href="/CharlesMandracchia">
                <img src={imgCharles} class="img_lawyer" />
              </a>
            </Col>
            <Col sm={{ size: 4 }} className="att_prof_col pad_left">
              <h1> Christopher D. Mandracchia </h1>
              <a href="/ChristopherMandracchia">
                <img src={imgChris} class="img_lawyer chrs_img_fix" />
              </a>
            </Col>
            <Col sm={{ size: 3 }} className="att_prof_col jeff_pad">
              <h1> Jeffrey W. Soderberg </h1>
              <a href="/JeffreySoderberg">
                <img src={imgJeff} class="img_lawyer" />
              </a>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default AttProf;
