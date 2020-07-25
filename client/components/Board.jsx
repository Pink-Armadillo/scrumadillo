import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card.jsx';

class Board extends Conponent {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <div>Board</div>
        <Card/>
      </div>
    )
  }
}

export default Board;