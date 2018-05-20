import React, { Component } from 'react';
import './HomePage.css';

// Imports
// import NavBar from '../../NavBar/NavBar';
import Header from './Header/Header';
import Upper from './Upper/Upper';
import Main from './Main/Main';
import Lower from './Lower/Lower';
import Footer from '../Footer/Footer';

// NavBar is imported and used on App.js

class HomePage extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <div className="headThin">
          <Header />
          <Upper />
          <Main />
          <Lower />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
