import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './OddCard.css';

import { Transition, animated } from 'react-spring';

const defaultStyles = {
  background: 'white',
  height: '200px',
  width: '200px',
  border: '1px solid black',
};

const defaultStyles2 = {
  background: 'black',
  height: '200px',
  width: '200px',
  border: '1px solid black',
};

const Boxes = styles => [<animated.div style={{ ...defaultStyles }} />];

const Box = styles => [<animated.div style={{ ...defaultStyles2 }} />];

class OddCard extends Component {
  state = { toggled: true };
  toggle = e => this.setState(state => ({ toggled: !state.toggled }));
  render() {
    return (
      <div
        className="container"
        onMouseEnter={this.toggle}
        onMouseLeave={this.toggle}
      >
        <Transition
          native
          from={{ opacity: 0 }}
          enter={{ opacity: 0 }}
          leave={{ opacity: 0 }}
        >
          {this.state.toggled ? Box : Boxes}
        </Transition>
      </div>
    );
  }
}

export default OddCard;

// This is no longer used -- temporary test file.
