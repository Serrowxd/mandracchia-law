import React, { Component } from 'react';
import './Main.css';

import Cards from './Cards';

import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardGroup,
  Button,
} from 'reactstrap';

class Main extends Component {
  state = {
    toggled: false,
    aopRow1: ['Banking', 'Civil Law', 'Commercial', 'Domestic Law'],
    aopRow2: [
      'Elder Law',
      'Employment and Labor Law',
      'Insurance Law',
      'Intellectual Property',
    ],
    aopRow3: [
      'Personal Injury Recovery',
      'Real Estate',
      'Wills and Estates',
      'More Info',
    ],
  };
  toggle = e => this.setState(state => ({ toggled: !state.toggled }));
  render() {
    return (
      <div>
        <h1 className="aopMain"> Areas of Practice </h1>
        <div>
          <CardGroup>
            {this.state.aopRow1.map((title, i) => {
              return <Cards title={title} key={i} />;
            })}
          </CardGroup>

          <CardGroup>
            {this.state.aopRow2.map((title, i) => {
              return <Cards title={title} key={i} />;
            })}
          </CardGroup>

          <CardGroup>
            {this.state.aopRow3.map((title, i) => {
              return <Cards title={title} key={i} />;
            })}
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default Main;
