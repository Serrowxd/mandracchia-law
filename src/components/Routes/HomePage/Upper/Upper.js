import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import img from '../../../../assets/newimgs/IMG_1958.JPG';
import img2 from '../../../../assets/newimgs/IMG_1879.JPG';

// import './Upper.css';

class Upper extends Component {
  state = {
    filler: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    filler1: ['owo'],
  };
  render() {
    return (
      <div>
        <Container fluid className="upperCon">
          <div class="upper_top">
            <div class="col_left">
              <img class="img tall" src={img} alt="placeholder" />
            </div>
            <div class="col_right">
              <h1 className="oMis oco"> Our Mission </h1>
              <p className="oMisP">
                The attorneys of Mandracchia Law, LLC take pride in the firm’s
                ability to represent clients zealously, yet ethically. The
                emphasis is on providing successful results completed in an
                expeditious fashion. The firm utilizes a comprehensive knowledge
                of the legal system combined with sound business judgment to
                protect its clients' interests. This ideal permeates the work
                method of the entire staff and is a cornerstone of Mandracchia &
                McWhirk’s philosophy. The attorneys further understand that a
                client’s need may shift to any number of areas through the
                course of the relationship. When such situations arise, the
                attorneys of Mandracchia Law are always prepared to offer the
                same competent, zealous representation in that emerging area as
                they displayed in the initial issues.
              </p>
              <p className="oMisP">{this.state.filler}</p>
              <p className="oMisP">{this.state.filler}</p>
            </div>
          </div>
          <div class="upper_bottom">
            <div class="col_left">
              <h1 className="oco"> Why Hire a Local Attorney? </h1>
              <p className="oMisP">{this.state.filler}</p>

              <h1 className="oco"> Why Hire Mandracchia Law? </h1>
              <p className="oMisP">{this.state.filler}</p>
            </div>
            <div class="col_right">
              <img class="img tall2" src={img2} alt="img2" />
            </div>
          </div>
          <h4>
            Protect your Legal Rights!{' '}
            <span className="glb_anim">Contact Mandracchia Law </span>
            today to discuss your case.
          </h4>
        </Container>
      </div>
    );
  }
}

export default Upper;
