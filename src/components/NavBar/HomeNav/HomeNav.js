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

import './HomeNav.css';

class HomeNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      scrolled: false,
      isTop: true,
    };
    this.navScroll = this.navScroll.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.navScroll);
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.navScroll();
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navScroll);
  }

  navScroll() {
    this.setState({ scrolled: true });
  }

  // Constructor and setState are for the dropdown feature, not yet implemented.

  render() {
    const scrolled = this.state.scrolled;
    return (
      <div>
        {/* <h2> Available Days, Nights & Weekends! (111) 111-1111 </h2> */}
        <div
          className="headNav_home"
          onScroll={() => this.setState({ scrolled: true })}
        >
          <Navbar color="" expand="lg" className={scrolled ? 'color' : 'none'}>
            <NavbarBrand className="navHead_home">
              <strong>Mandracchia Law</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="navTextL_home right_shift_nav glb_anim"
                    href="/"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="navTextL_home right_shift_nav glb_anim"
                    href="/AboutUs/"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="navTextL_home right_shift_nav glb_anim"
                    href="/AttProf/"
                  >
                    Attorney Profiles
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="navTextL_home right_shift_nav glb_anim"
                    href="/AoP/"
                  >
                    Areas of Practice
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navTextL_home glb_anim" href="/FAQ/">
                    FAQ
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

export default HomeNav;

// https://zoom.us/j/9671453711
