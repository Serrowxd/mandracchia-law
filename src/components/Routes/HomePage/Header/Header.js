import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

import './Header.css';

import ClickModal from './ClickModal/ClickModal';

class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="jumboColor">
          <h1 className="display-3"> Looking For </h1>
          <h1 className="display-1"> CRIMINAL DEFENSE </h1>
          <h1 className="display-2"> REPRESENTATION </h1>
          <h1 className="display-4"> IN PENNSYLVANIA? </h1>
          <hr className="my-2" />
          <p className="lead">Mandracchia Law is a Full-Service Law Firm.</p>
          <p className="lead">
            We are primarily trial attorneys and litigators. We handle criminal,
            personal injury, civil, wills, family etc.
          </p>
          <p className="lead">
            <Button outline className="headJumboButton">
              Let us handle your case!
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
