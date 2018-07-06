import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './MeetUs.css';

import img from './placeholder.png';

import att1 from '../../../../assets/attorney-mandracchia.png';
import att2 from '../../../../assets/cm.jpg';

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
                  <span> over 100 years </span>
                </strong>
                of combined legal experience.
              </h1>
            </Col>
          </Row>
          <Row className="rowColorLight">
            <Col sm={{ size: 5 }} className="lawyer_head">
              <h1 className="lawyerName_hover glb_anim">
                {' '}
                Charles D. Mandracchia{' '}
              </h1>
              <img class="imgLawyer" src={att1} alt="attorney" />
            </Col>

            <Col sm={{ size: 5 }}>
              <h1 className="lawyerName_hover glb_anim">
                {' '}
                Christopher D. Mandracchia{' '}
              </h1>
              <img class="imgLawyer" src={att2} alt="attorney" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MeetUs;
