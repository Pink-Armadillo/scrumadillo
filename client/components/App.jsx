import React, { Component } from 'react';

import Canvas from './Canvas';
import Signup from '../component/Signup';
import Login from '../component/Login';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        test in app
        <Login />
      </div>
    );
  }
}

export default App;
