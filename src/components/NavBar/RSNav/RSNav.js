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

import './RSNav.css';

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
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand className="navHead">Mandracchia Law</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="navTextL" href="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navTextL" href="/AboutUs/">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navTextL" href="/AttProf/">
                    Attorney Profiles
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navTextL" href="/AoP/">
                    Areas of Practice
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navTextL" href="/FAQ/">
                    FAQ
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default RSNav;
