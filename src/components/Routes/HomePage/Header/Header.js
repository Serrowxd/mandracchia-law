import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

import './Header.css';

import ClickModal from './ClickModal/ClickModal';

class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="jumboColor">
          <h1 className="display-3 shift_right"> Looking For </h1>
          <h1 className="display-1 shift_right"> LEGAL </h1>
          <h1 className="display-2 shift_right"> REPRESENTATION </h1>
          <h1 className="display-4 shift_right"> IN PENNSYLVANIA? </h1>
          {/* <hr className="my-2 upperHR" /> */}
          <p className="lead shift_right">
            <strong>Mandracchia Law</strong> is a team of experienced trial
            attorneys and litigators. <br />
            We handle Criminal Defense, Civil Litigation, Personal Injury, Real
            Estate, <br />
            Family Law, Wills & Estates, Domestic Disputes, etc.
          </p>
          {/* <p className="lead">
            We are primarily trial attorneys and litigators. We handle criminal,
            personal injury, civil, wills, family etc.
          </p> */}
          <p className="lead shift_right">
            <Button outline className="headJumboButton">
              Let us Fight for You!
            </Button>
            {/* <ClickModal /> */}
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;

// Button will link to the Contact Page -- Not currently created, no route available.
// ClickModal is in place for the sake of having it there.
