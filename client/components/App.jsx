import React, { Component } from 'react';

import Canvas from './Canvas';
import axios from 'axios';
import { useDispatch, useSelector, dispatch } from 'react-redux';
import { getCards, selectDeck } from '../reducers/deckSlice';
import { Fetch } from '../reducers/deck';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    <div>
      test in app
      <Fetch />
      <Canvas />
    </div>;
  }

  render() {
    return (
      <div>
        test in app
        <Canvas />
      </div>
    );
  }
}

export default App;
