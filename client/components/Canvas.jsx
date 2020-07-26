import React, { Component } from 'react';
//import { connect } from 'react-redux';
// (stateful component)
import Board from './Board';

// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

class Canvas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>SCRUMadillo logo placeholder</h1>
        <div>Canvas</div>
        <button onClick={this.props.logOut}>Log out</button>
        <Board />
      </div>
    );
  }
}

//  export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
export default Canvas;
