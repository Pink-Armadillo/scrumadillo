import React, { Component } from 'react';

import Canvas from './Canvas';

class App extends Component {
  constructor(props) {
    super(props);
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
