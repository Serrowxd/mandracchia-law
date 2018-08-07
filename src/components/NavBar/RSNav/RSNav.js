import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
// import { Link } from 'react-router-dom';

// import './RSNav.css';

class RSNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // Constructor and setState are for the dropdown feature, not yet implemented.

  render() {
    return (
      <div>
        {/* <h2> Available Days, Nights & Weekends! (111) 111-1111 </h2> */}
        <div className="headNav">
          <Navbar color="dark" dark expand="lg">
            <NavbarBrand className="navHead">
              <strong>Mandracchia Law</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="navTextL right_shift_nav glb_anim"
                    href="/"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="navTextL right_shift_nav glb_anim"
                    href="/AboutUs/"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="navTextL right_shift_nav glb_anim"
                    href="/AttProf/"
                  >
                    Attorney Profiles
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="navTextL right_shift_nav glb_anim"
                    href="/AoP/"
                  >
                    Areas of Practice
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navTextL glb_anim" href="/FAQ/">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <h1>
              <strong>
                Call for Consultation <br /> 610-584-0700
              </strong>
            </h1>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default RSNav;
