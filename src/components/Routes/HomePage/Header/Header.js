import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

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
          <h1 className="display-4"> IN STATE? </h1>
          <hr className="my-2" />
          <p className="lead">
            We totally know things, so we can use those things to help you out.
          </p>
          <p className="lead">
            Still curious? Look at this birb in the meantime!
          </p>
          <h4> Henlo (OvO") </h4>
          <p className="lead">
            {/* <Button outline className="headJumboButton">
              Please don't click on me!
            </Button> */}
            <ClickModal />
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;

// Button will link to the Contact Page -- Not currently created, no route available.
// ClickModal is in place for the sake of having it there.
