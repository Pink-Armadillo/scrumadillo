import React, { Component } from 'react';
//import { connect } from 'react-redux';

import Task from './Task';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Card</div>
        <Task />
      </div>
    );
  }
}

export default Card;
