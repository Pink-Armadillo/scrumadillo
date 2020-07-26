import React, { Component } from 'react';

import Canvas from './Canvas';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../reducers/cardSlice';
// const dispatch = useDispatch();

// import { getCards, selectDeck } from '../reducers/deckSlice';
// import { Fetch } from '../reducers/deck';

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   fetch('/server/cards')
  //     .then((data) => data.json())
  //     .then((data) => dispatch(() => cardSlice(data)));
  // }

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
