import React, { Component } from 'react';
import './App.css';

// Imports
import HomePage from './components/Routes/HomePage/HomePage';
import RSNav from './components/NavBar/RSNav/RSNav';

// import NavBar from './components/NavBar/NavBar';

// Testing RSNav in this current build, NavBar is being left in until it is not needed.

class App extends Component {
  render() {
    return (
      <div className="appBack">
        {/* <NavBar /> */}
        <RSNav />
        <HomePage />
      </div>
    );
  }
}

export default App;
