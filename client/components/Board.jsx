import React, { Component } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
//import { connect } from 'react-redux';

import Card from './Card.jsx';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Board</div>
        <Card />
      </div>
    );
  }
}

export default Board;
