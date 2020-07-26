import React, { Component } from 'react';

import Canvas from './Canvas';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getCards } from '../reducers/deckSlice';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('server/cards').then((data) => {
      const dispatch = useDispatch();

      dispatch(getCards(data));
    });
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
