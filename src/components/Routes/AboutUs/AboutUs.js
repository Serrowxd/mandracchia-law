import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import img from './../../../assets/law.jpg';

import './AboutUs.css';

import Contact from '../../Contact/Contact';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';

class AboutUs extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <Container fluid className="upperCon aop_cont">
          <h1 className="centerH">
            <strong>
              Our history of commitment to a range of legal matters
            </strong>
          </h1>
          <Row>
            <Col sm={{ size: 2, offset: 1 }}>
              <img class="aob_img" src={img} alt="owo" />
            </Col>
            <Col sm={{ size: 5, offset: 0 }}>
              <p>
                Mr. Charles Mandracchia, Esq. and his associates have provided
                comprehensive legal services to a diverse group of clients for{' '}
                over 25 years. Since establishing the firm in 1991, we have
                grown our practice from a small operation concentrating mostly
                in banking and commercial law into the truly full-service law
                firm that it is today.
              </p>
              <p>
                As Mandracchia Law LLC expanded, we gained the in-depth
                experience and leadership necessary to successfully represent
                all types of clients, whether individuals, families, small
                business ventures or some of the country’s largest commercial
                and banking businesses. And the area we serve has also grown —
                today our clients are located in Reading, Wyomissing, Lansdale,
                Norristown, Montgomery and Berks counties, and throughout all of
                Pennsylvania, New Jersey and New York. <br /> Personal injury
                and criminal defense lawyers in Montgomery County with a lasting
                commitment to integrity .
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 7, offset: 1 }}>
              <p>
                Even as Mandracchia Law LLC has evolved over the years, we have
                consistently held to the strong ethical guidelines Mr.
                Mandracchia established in the beginning. Our criminal defense
                and personal injury law firm in Montgomery County remains
                defined by the ability to represent clients zealously yet
                ethically. The emphasis is on providing successful results as
                soon as possible. With more than 100 years of combined
                experience, our personal injury and criminal defense attorneys
                use their comprehensive knowledge of the legal system along with
                sound business judgment to protect your interests.
              </p>
              <p>
                This ideal permeates the work ethic of the entire staff and is a
                cornerstone of Mandracchia Law LLC’s philosophy. Because our
                Montgomery county criminal defense attorneys and personal injury
                lawyers are experienced in a broad range of practice areas,
                clients often begin their relationship with our firm in one
                practice area and return for help in another area.
                <br /> Aggressive and effective Montgomery County personal
                injury lawyers and criminal defense attorneys who advocate for
                our clients.
              </p>
              <p>
                Mandracchia Law LLC is a multi-state law firm that provides
                individual attention to each client and case. Our personal
                injury and criminal defense lawyers in Montgomery County proudly
                offer ethical, aggressive and knowledgeable representation.
              </p>
              <p>
                Our unique team approach allows clients to benefit from our
                attorneys’ combined experience of more than 100 years. To speak
                with a criminal defense or personal injury lawyer in Montgomery
                County about your legal matter, call 610-584-0700 today, or
                contact us online.
              </p>
              <p>
                Mandracchia Law LLC is located in Montgomery County, serving
                clients in Montgomery County, Berks County, and the suburban
                Philadelphia area
              </p>
            </Col>

            <Col sm={{ size: 3, offset: 0 }}>
              <Contact />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
