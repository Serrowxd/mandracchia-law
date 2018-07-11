import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';

import './Media.css';

class Media extends Component {
  render() {
    return (
      <div className="light_div_djej jfj">
        <Container fluid className="LowerHeaderCon">
          <Row className="rowColorLight">
            <h1 className="oMis light_div">Media Stuff</h1>
          </Row>
          <Row className="rowColorLight">
            <Col sm={{ size: 3 }}>
              <Card inverse>
                <CardText>
                  <h1 className="oMis light_div"> Media </h1>
                </CardText>
              </Card>
            </Col>
            <Col sm={{ size: 3 }}>
              <Card inverse>
                <CardText>
                  <h1 className="oMis light_div"> Media </h1>
                </CardText>
              </Card>
            </Col>
            <Col sm={{ size: 3 }}>
              <Card inverse>
                <CardText>
                  <h1 className="oMis light_div"> Media </h1>
                </CardText>
              </Card>
            </Col>
            <Col sm={{ size: 3 }}>
              <Card inverse>
                <CardText>
                  <h1 className="oMis light_div"> Media </h1>
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Media;
