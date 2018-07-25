import React, { Component } from 'react';
// import './Main.css';

import Cards from './Cards';

import { CardGroup } from 'reactstrap';

import img from '../../../../assets/cardimgs/top_left.png';
import img2 from '../../../../assets/cardimgs/top_left_2.png';
import img3 from '../../../../assets/cardimgs/top_left_3.png';
import img4 from '../../../../assets/cardimgs/top_left4.png';
import img5 from '../../../../assets/cardimgs/middle_left.png';
import img6 from '../../../../assets/cardimgs/middle_left2.png';
import img7 from '../../../../assets/cardimgs/middle_left3.png';
import img8 from '../../../../assets/cardimgs/middle_left4.png';
import img9 from '../../../../assets/cardimgs/bottom_left.png';
import img10 from '../../../../assets/cardimgs/bottom_left2.png';
import img11 from '../../../../assets/cardimgs/bottom_left3.png';
import img12 from '../../../../assets/cardimgs/bottom_left4.png';

class Main extends Component {
  state = {
    toggled: false,
    aopRow1: [
      ['Banking', img],
      ['Civil Law', img2],
      ['Commercial', img3],
      ['Domestic Law', img4],
    ],
    aopRow2: [
      ['Elder Law', img5],
      ['Employment and Labor Law', img6],
      ['Insurance Law', img7],
      ['Intellectual Property', img8],
    ],
    aopRow3: [
      ['Personal Injury Recovery', img9],
      ['Real Estate', img10],
      ['Wills and Estates', img11],
      ['More Info', img12],
    ],
  };
  toggle = e => this.setState(state => ({ toggled: !state.toggled }));
  render() {
    return (
      <div>
        <h1 className="aopMain"> Areas of Practice </h1>
        <div>
          <CardGroup>
            {this.state.aopRow1.map(([title, cardimg], i) => {
              return <Cards title={title} cardimg={cardimg} key={i} />;
            })}
          </CardGroup>

          <CardGroup>
            {this.state.aopRow2.map(([title, cardimg], i) => {
              return <Cards title={title} cardimg={cardimg} key={i} />;
            })}
          </CardGroup>

          <CardGroup>
            {this.state.aopRow3.map(([title, cardimg], i) => {
              return <Cards title={title} cardimg={cardimg} key={i} />;
            })}
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default Main;
