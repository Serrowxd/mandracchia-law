import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './MeetUs.css';

import img from './placeholder.png';

import att1 from '../../../../assets/attorney-mandracchia.png';
import att2 from '../../../../assets/cm.jpg';
import att3 from '../../../../assets/attorney-soderberg.png';

class MeetUs extends Component {
  render() {
    return (
      <div className="light_div_djej">
        <Container fluid className="MeetUsCon">
          <Row className="fixRow">
            <Col className="fixCol">
              <h1 className="fixRow_h1">
                Meet the Team with
                <strong>
                  <span> over 60 years </span>
                </strong>
                of combined legal experience.
              </h1>
            </Col>
          </Row>
          <Row className="rowColorLight">
            <Col sm={{ size: 3 }} className="lawyer_head">
              <a href="/CharlesMandracchia">
                <h1 className="lawyerName_hover glb_anim">
                  Charles D. Mandracchia
                </h1>
              </a>
              <img class="imgLawyer" src={att1} alt="attorney" />
            </Col>

            <Col sm={{ size: 3 }} className="lawyer_head">
              <a href="/ChristopherMandracchia">
                <h1 className="lawyerName_hover glb_anim">
                  Christopher D. Mandracchia
                </h1>
              </a>
              <img class="imgLawyer" src={att2} alt="attorney" />
            </Col>

            <Col sm={{ size: 3 }} className="lawyer_head">
              <a href="/JeffreySoderberg">
                <h1 className="lawyerName_hover glb_anim">
                  Jeffrey W. <br /> Soderberg
                </h1>
              </a>
              <img class="imgLawyer" src={att3} alt="attorney" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MeetUs;
