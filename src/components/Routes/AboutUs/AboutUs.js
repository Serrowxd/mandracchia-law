import React, { Component } from 'react';
import './AboutUs.css';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';

class AboutUs extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <h1> About Us goes Here </h1>
      </div>
    );
  }
}

export default AboutUs;
