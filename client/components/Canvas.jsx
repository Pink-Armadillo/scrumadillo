import React, { Component } from 'react';
import { connect } from 'react-redux';
// (stateful component)
import Board from './Board.jsx';


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class Canvas extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <h1>SCRUMadillo logo placeholder</h1>
        <div>Canvas</div>
        <Board/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);