import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AttConst = props => {
  return (
    <Col sm={{ size: 7, offset: 1 }} className="col_att">
      <img src={props.img} class="img" alt="imglul" />
      <h2> {props.att_name_sm} </h2>
      <h3> Email: {props.email} </h3>
      <h3> Phone: {props.phone}</h3>
      <h3> Fax: {props.fax}</h3>
      <p>{props.self_text1}</p>
      <p>{props.self_text2}</p>
      <p>{props.self_text3}</p>
      <p>{props.self_text4}</p>
      <p>{props.self_text5}</p>
    </Col>
  );
};

export default AttConst;
