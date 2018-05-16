import React, { Component } from 'react';
import './AoP.css';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';

class AoP extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <h1> Areas Of Practice go Here </h1>
      </div>
    );
  }
}

export default AoP;
