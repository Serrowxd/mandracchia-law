import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import './LowerHeader.css';

// import img from './placeholder.png';

import ach1 from '../../../../assets/badge-nlc.png';
import ach2 from '../../../../assets/unnamed-269x300.jpg';
import ach3 from '../../../../assets/badge-legion.png';

class LowerHeader extends Component {
  render() {
    return (
      <div className="light_div_djej">
        <Container fluid className="LowerHeaderCon">
          <Row className="rowColorLight">
            <Col sm={{ size: 10, offset: 1 }}>
              <h1 className="oMis light_div"> Awards & Accolades </h1>
              <img class="img award" src={ach1} alt="placeholder" />
              <img class="img award" src={ach2} alt="placeholder" />
              <img class="img award" src={ach3} alt="placeholder" />

              <hr />
              <hr />
              {/* These HR's represent navigation clicks */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LowerHeader;
