import React, { Component } from 'react';

import Canvas from './Canvas';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Canvas />
      </div>
    );
  }
}

export default App;
