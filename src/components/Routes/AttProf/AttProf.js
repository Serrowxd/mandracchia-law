import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './AttProf.css';

import imgChris from '../../../assets/cm.jpg';
import imgCharles from '../../../assets/attorney-mandracchia.png';
import imgJeff from '../../../assets/attorney-soderberg.png';

import Contact from '../../Contact/Contact';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';
import ChrisProf from './ChrisProf';
import CharlesProf from './CharlesProf';

class AttProf extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <a href="/CharlesMandracchia">
          <img src={imgCharles} class="img" />
        </a>
        <a href="/ChristopherMandracchia">
          <img src={imgChris} class="img" />
        </a>
        <a href="/JeffreySoderberg">
          <img src={imgJeff} class="img" />
        </a>
        <Footer />
      </div>
    );
  }
}

export default AttProf;
