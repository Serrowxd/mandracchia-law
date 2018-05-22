import React, { Component } from 'react';
import './App.css';

// Imports
import HomePage from './components/Routes/HomePage/HomePage';
import RSNav from './components/NavBar/RSNav/RSNav';

// import NavBar from './components/NavBar/NavBar';

// Testing RSNav in this current build, NavBar is being left in until it is not needed.

// Commented out RSNav here, replaced it inside HomePage.js for Debugging issues.

class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        {/* <RSNav /> */}
        <HomePage />
      </div>
    );
  }
}

export default App;
