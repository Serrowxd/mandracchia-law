import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './AttProf.css';

import Contact from '../../Contact/Contact';

import AttConst from './AttConst/AttConst';

import img from '../../../assets/cm.jpg';

import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';

class ChrisProf extends Component {
  state = {
    att_name: ['Christopher D. Mandracchia'],
    img: [img],
    email: ['asdfasdfa@adjkfapd.com'],
    phone: ['546149845'],
    fax: ['5165496849'],
    self_text1: [
      'A zealous advocate and former prosecutor employed with a full service law firm. Mr. Mandracchia is a lifelong resident of Montgomery County, PA and was born in Norristown, PA. He is a graduate of The Hill School, Duke University and St. Thomas University School of Law. Christopher D. Mandracchia, Esq. was admitted to practice in Pennsylvania in 2010 and in The United States District Court for the Eastern District of Pennsylvania on June 04, 2015. He is a successful trial attorney with the experience and skills to handle all of your litigation needs.',
    ],
    self_text2: [
      'Mr. Mandracchia handles Criminal Defense, DUI’s/DWI’s, Family Law, Personal Injury, Wills/Trusts, Traffic Violations, License Suspensions issues, and all of your litigation needs. Mr. Mandracchia strives to communicate, listen, and interact with his clients in order to give each client personalized representation. Each client will receive a unique and custom legal experience tailored to your individual case.',
    ],
    self_text3: [
      'After graduating from the Hill School, Mr. Mandracchia went to Duke University where he received his B.A. in English with a minor in History and was a member of the Duke University Varsity Wrestling Team. Mr. Mandracchia went on to attend St. Thomas University School of Law in Miami, Florida where he was an intern for a Criminal Defense Firm and graduated in 2010.',
    ],
    self_text4: [
      'Attorney Mandracchia was an Assistant District Attorney in Berks County, PA from 2010 to 2015 where he gained valuable knowledge and experience of the criminal justice system. Mr. Mandracchia prosecuted and managed many cases from inception to trial. Mr. Mandracchia continued to expand his knowledge through specialized training while employed as a Prosecutor. He is a graduate of Top Gun at the Northeast Counterdrug Training Center in Ft. Indiantown Gap, PA. He gained valuable knowledge and training in various fields of criminal law and has specialized training dealing with Sex Crimes, Drug Crimes, Gang Crimes, as well as DUI/DWI matters.',
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

export default ChrisProf;

//  {this.state.chris.map(
//   (
//     [
//       att_name,
//       img,
//       email,
//       phone,
//       fax,
//       self_text1,
//       self_text2,
//       self_text3,
//       self_text4,
//       self_text5,
//     ],
//     i
//   ) => {
//     return (
//       <AttConst
//         att_name={att_name}
//         img={img}
//         email={email}
//         phone={phone}
//         fax={fax}
//         self_text1={self_text1}
//         self_text2={self_text2}
//         self_text3={self_text3}
//         self_text4={self_text4}
//         self_text5={self_text5}
//       />
//     );
//   }
// )}
