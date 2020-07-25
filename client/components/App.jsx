import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';

import Canvas from './Canvas.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Canvas/>
      </div>
    )
  }
}

export default App;