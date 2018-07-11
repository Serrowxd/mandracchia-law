import React, { Component } from 'react';
import './HomePage.css';

// Imports
import Header from './Header/Header';
import LowerHeader from './LowerHeader/LowerHeader';
import Upper from './Upper/Upper';
import MeetUs from './MeetUs/MeetUs';
import NewMain from './Main/NewMain/NewMain';
import Media from './Media/Media';
import Lower from './Lower/Lower';
import Footer from '../Footer/Footer';

import OldMain from './Main/OldMain';

// Nav Imports

import NavBar from '../../NavBar/NavBar';
import HomeNav from '../../NavBar/HomeNav/HomeNav';

// import PNav from '../../NavBar/PNav/PNav';

// NavBar is imported and used on App.js

// You can test two differen types of layouts here
// Change `mainThinHome` to `mainThin` and it will set a different layout.

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeNav />
        <div className="mainThinHome">
          <Header />
          <LowerHeader />
          <Upper />

          <MeetUs />

          <NewMain />

          <Media />

          <Lower />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
