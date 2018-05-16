import React, { Component } from 'react';
import './FAQ.css';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';

class FAQ extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <h1> Frequently Asked Questions go Here </h1>
      </div>
    );
  }
}

export default FAQ;
