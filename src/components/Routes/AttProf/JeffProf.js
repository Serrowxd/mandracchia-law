import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import './AttProf.css';

import ContactForm from '../../ContactForm/ContactForm';

import AttConst from './AttConst/AttConst';

import img from '../../../assets/lawyerimgs/Soderberg_0107.jpg';

import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';

class JeffProf extends Component {
  state = {
    att_name: ['Jeffrey W. Soderberg'],
    img: [img],
    email: ['asdfasdfa@adjkfapd.com'],
    phone: ['546149845'],
    fax: ['5165496849'],
    self_text1: [
      'Jeffrey Soderberg is an experienced attorney who handles a wide range of legal matters, including civil litigation, real estate matters and estate planning and administration.',
    ],
    self_text2: [
      'Mr. Soderberg has experience in a wide range of civil litigation cases in both federal and state courts. He has represented numerous businesses in complex commercial litigation matters ranging from small matters to multimillion-dollar disputes. Mr. Soderberg has represented businesses and individuals in significant contract disputes, commercial loan workouts and foreclosures, construction cases, real estate matters, insurance disputes, defamation cases, and securities fraud, antitrust and employment discrimination claims.',
    ],
    self_text3: [
      'Mr. Soderberg has also successfully represented clients in significant personal injury litigation matters, including medical malpractice, product liability, premises liability and other tort cases. Mr. Soderberg also represents businesses and individuals in real estate and loan transactions and represents clients in will probate and estate administration matters.',
    ],
    self_text4: [
      'Mr. Soderberg began his career serving as a federal judicial clerk for the Honorable James McGirr Kelly in the United States District Court for the Eastern District of Pennsylvania. He spent several years handling complex commercial litigation matters at a large firm in Philadelphia. Before joining Mandracchia Law, LLC, Mr. Soderberg practiced law at a small firm in the Philadelphia suburbs where he managed a broad range of litigation matters.',
    ],
    self_text5: [
      'Mr. Soderberg graduated with honors from Pennsylvania State University, and graduated summa cum laude from Villanova University School of Law where he was a member of the Order of the Coif and a managing editor of the Law Review. He is admitted to practice in the Commonwealth of Pennsylvania, U.S. District Court for the Eastern District of Pennsylvania, U.S. District Court for the Middle District of Pennsylvania and the U.S. Court of Appeals for the Third Circuit.',
    ],
    self_text6: [
      'Mr. Soderberg is active in his church and his community, including serving on several non-profit Boards.',
    ],
  };
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <Container fluid className="upperCon attprof">
          <Row>
            <Col sm={{ size: 3, offset: 1 }} className="col_att">
              <img src={this.state.img} class="img" alt="imglul" />
            </Col>

            <Col sm={{ size: 6, offset: 1 }} className="name_att jeff">
              <Row>
                <h2> {this.state.att_name} </h2>
                <Col sm={{ size: 6 }} className="jeff_pls">
                  <h3>
                    <strong>Email: </strong> {this.state.email}
                  </h3>
                </Col>
                <Col sm={{ size: 3 }}>
                  <h3>
                    <strong>Phone: </strong> {this.state.phone}
                  </h3>
                </Col>
                <Col sm={{ size: 3 }}>
                  <h3>
                    <strong>Fax: </strong> {this.state.fax}
                  </h3>
                </Col>
              </Row>
            </Col>
            {/* <Col sm={{ size: 3, offset: 1 }}>
              <ContactForm />
            </Col> */}
          </Row>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} className="col_bio">
              <p>{this.state.self_text1}</p>
              <p>{this.state.self_text2}</p>
              <p>{this.state.self_text3}</p>
              <p>{this.state.self_text4}</p>
              <p>{this.state.self_text5}</p>
              <p>{this.state.self_text6}</p>
            </Col>
            {/* <Col sm={{ size: 3,  }}>
              <ContactForm />
            </Col> */}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default JeffProf;
