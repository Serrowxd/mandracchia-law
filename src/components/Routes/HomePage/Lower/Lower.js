import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';

import './Lower.css';

class Lower extends Component {
  state = {
    filler: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  };

  render() {
    return (
      <div>
        <Container fluid className="LowerCon">
          <Row className="rowColorDark">
            <Col sm={{ size: 6, offset: 0 }}>
              <h1 className="oMis oco work_together"> Let's work together </h1>
              <p className="oMisP">{this.state.filler}</p>
              <p className="oMisP">{this.state.filler}</p>
              <p className="oMisP">{this.state.filler}</p>
            </Col>
            <Col sm={{ size: 6, offset: 0 }}>
              <h2>
                Contact <br />Us
              </h2>
              <InputGroup>
                <Input className="input_here" placeholder="Name" />
                <Input className="input_here" placeholder="Phone" />
              </InputGroup>
              <InputGroup>
                <Input className="input_here" placeholder="Email" />
                <Input
                  className="input_here"
                  placeholder="Are you a new client?"
                />
              </InputGroup>
              <InputGroup>
                <Input className="input_here message" placeholder="Message" />
              </InputGroup>
              <Button outline className="headJumboButton submit">
                Submit Information
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Lower;
