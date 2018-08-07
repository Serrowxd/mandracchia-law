import React from 'react';
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

import './Contact.css';

const Contact = props => {
  return (
    <Col className="contact_col">
      <h2>
        Contact <br />Us
      </h2>
      <InputGroup>
        <Input className="input_here" placeholder="Name" />
      </InputGroup>
      <InputGroup>
        <Input className="input_here" placeholder="Phone" />
      </InputGroup>
      <InputGroup>
        <Input className="input_here" placeholder="Email" />
      </InputGroup>
      <InputGroup>
        <Input className="input_here" placeholder="Are you a new client?" />
      </InputGroup>
      <Button outline className="headJumboButton contact_submit">
        Submit Information
      </Button>
    </Col>
  );
};

export default Contact;
