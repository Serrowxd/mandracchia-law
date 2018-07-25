import React, { Component } from 'react';
// import './NewMain.css';

import Cards from './NewCards';

import { CardGroup } from 'reactstrap';

import img from '../../../../../assets/cardimgs/top_left.png';
import img2 from '../../../../../assets/cardimgs/top_left_2.png';
import img3 from '../../../../../assets/cardimgs/top_left_3.png';
import img4 from '../../../../../assets/cardimgs/top_left4.png';
import img5 from '../../../../../assets/cardimgs/middle_left.png';
import img6 from '../../../../../assets/cardimgs/middle_left2.png';
import img7 from '../../../../../assets/cardimgs/middle_left3.png';
import img8 from '../../../../../assets/cardimgs/middle_left4.png';
import img9 from '../../../../../assets/cardimgs/bottom_left.png';
import img10 from '../../../../../assets/cardimgs/bottom_left2.png';
import img11 from '../../../../../assets/cardimgs/bottom_left3.png';
import img12 from '../../../../../assets/cardimgs/bottom_left4.png';

class NewMain extends Component {
  state = {
    aopRow1: [
      [
        'Civil Litigation',
        img,
        'Contract Disputes',
        'Business Litigation/Disputes',
        'Class Actions',
      ],
      [
        'Traffic Matters',
        img2,
        'Traffic Tickets',
        'License Suspension/Restoration',
        'DUI/DWI',
      ],
      [
        'Personal injury',
        img3,
        'Accidents',
        'Premise Liability',
        'Catastrophic Injuries',
      ],
    ],
    aopRow2: [
      [
        'Criminal',
        img5,
        'Driving Under the Influence',
        'Drug Crimes',
        'Sex Crimes',
      ],
      ['Domestic', img6, 'Protection from Abuse (PFA)', 'Divorce', 'Custody'],
      [
        'Wills & Estates',
        img7,
        'Drafting of Wills',
        'Power of Attorney',
        'Advanced Medical Directives/Living Wills',
      ],
    ],
    aopRow3: [
      [
        'Real Estate',
        img9,
        'Environmental Regulations',
        'Contruction/Zoning',
        'Acquisition and Disposition',
      ],
      [
        'Commercial',
        img10,
        'Product Liability',
        'Intellectual Property Disputes',
        'Breaches of Contract',
      ],
      [
        'Other Information',
        img11,
        'We offer over',
        '50 years of combined',
        'legal experience',
      ],
    ],
  };
  render() {
    return (
      <div>
        <h1 className="aopMain"> Areas of Practice </h1>
        <div>
          <CardGroup>
            {this.state.aopRow1.map(
              ([title, cardimg, text, text2, text3], i) => {
                return (
                  <Cards
                    title={title}
                    cardimg={cardimg}
                    text={text}
                    text2={text2}
                    text3={text3}
                    key={i}
                  />
                );
              }
            )}
          </CardGroup>

          <CardGroup>
            {this.state.aopRow2.map(
              ([title, cardimg, text, text2, text3, text4], i) => {
                return (
                  <Cards
                    title={title}
                    cardimg={cardimg}
                    text={text}
                    text2={text2}
                    text3={text3}
                    text4={text4}
                    key={i}
                  />
                );
              }
            )}
          </CardGroup>

          <CardGroup>
            {this.state.aopRow3.map(
              ([title, cardimg, text, text2, text3, text4], i) => {
                return (
                  <Cards
                    title={title}
                    cardimg={cardimg}
                    text={text}
                    text2={text2}
                    text3={text3}
                    text4={text4}
                    key={i}
                  />
                );
              }
            )}
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default NewMain;
