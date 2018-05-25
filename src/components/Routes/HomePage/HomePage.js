import React, { Component } from 'react';
import './HomePage.css';

// Imports
import Header from './Header/Header';
import Upper from './Upper/Upper';
import Main from './Main/Main';
import Lower from './Lower/Lower';
import Footer from '../Footer/Footer';

// Nav Imports

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';
// import PNav from '../../NavBar/PNav/PNav';

// NavBar is imported and used on App.js

// You can test two differen types of layouts here
// Change `mainThinHome` to `mainThin` and it will set a different layout.

class HomePage extends Component {
  render() {
    return (
      <div>
        <RSNav />
        <div className="mainThinHome">
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
