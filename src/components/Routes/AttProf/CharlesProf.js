import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './AttProf.css';

import Contact from '../../Contact/Contact';

import AttConst from './AttConst/AttConst';

import img from '../../../assets/attorney-mandracchia.png';

import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';

class CharlesProf extends Component {
  state = {
    att_name: ['Charles D. Mandracchia'],
    img: [img],
    email: ['werw@mmattorneys.com'],
    phone: ['546149845'],
    fax: ['5165496849'],
    self_text1: [
      'Charles D. Mandracchia is a 1988 graduate of Villanova School of Law and the founder and managing partner of Mandracchia Law, LLC. He is a seasoned attorney practicing in both Federal and State Courts.',
    ],
    self_text2: [
      'Mr. Mandracchia began his career representing developers in commercial litigation and land development along with being a part-time Public Defender where he learned how to be a zealous advocate in the courtroom. His career blossomed in commercial litigation where he does most of his legal work but he never lost his zeal for the criminal courtroom.',
    ],
    self_text3: [
      'Mr. Mandracchia understands that whether you represent an individual, large corporation or a small business in commercial matters, they are all managed by people who can find themselves or family members on the wrong side of the law. Therefore, he makes sure the firm has the experience and expertise to represent them with extremely qualified and zealous representation, in commercial law and if necessary criminal law.',
    ],
    self_text4: [
      'Mr. Mandracchia is active in his church and community serving on several non-profit Boards along with staying active in politics. He has been married to his wife Charlotte for over 33 years. They have three children and he enjoys spending time with his family.',
    ],
    self_text5: [
      'Mandracchia Law, LLC. is a full service law firm and handles all of your legal needs. If you want a zealous advocate, and a customized legal experience then give Christopher D. Mandracchia, Esquire a call. Please visit us at www.mmattorneys.com or call 610-584-0700.',
    ],
  };
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <Container fluid className="upperCon attprof">
          <Row>
            <Col sm={{ size: 4, offset: 1 }} className="col_att">
              <img src={this.state.img} class="img" alt="imglul" />
            </Col>

            <Col sm={{ size: 7, offset: 0 }} className="name_att">
              <Row>
                <h2> {this.state.att_name} </h2>
                <Col sm={{ size: 5, offset: 0 }}>
                  <h3>
                    <strong>Email: </strong> {this.state.email}
                  </h3>
                </Col>
                <Col sm={{ size: 3, offset: 0 }}>
                  <h3>
                    <strong>Phone: </strong> {this.state.phone}
                  </h3>
                </Col>
                <Col sm={{ size: 4, offset: 0 }}>
                  <h3>
                    <strong>Fax: </strong> {this.state.fax}
                  </h3>
                </Col>
              </Row>
            </Col>
            {/* <Col sm={{ size: 3, offset: 1 }}>
              <Contact />
            </Col> */}
          </Row>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} className="col_bio">
              <p>{this.state.self_text1}</p>
              <p>{this.state.self_text2}</p>
              <p>{this.state.self_text3}</p>
              <p>{this.state.self_text4}</p>
              <p>{this.state.self_text5}</p>
            </Col>
            {/* <Col sm={{ size: 3, offset: 0 }}>
              <Contact />
            </Col> */}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default CharlesProf;
