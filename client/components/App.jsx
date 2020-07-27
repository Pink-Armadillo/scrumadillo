import React, { Component } from 'react';

const axios = require('axios');

import Canvas from './Canvas';

import axios from 'axios';
//import { useDispatch, useSelector } from 'react-redux';

// merge resolved Sunday 5:46 PM

import Signup from '../component/Signup';
import Login from '../component/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.loginFunction = this.loginFunction.bind(this);
    this.signupFunction = this.signupFunction.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.setState({ loggedIn: false });
  }
  loginFunction(username, password) {
    axios
      .post('/server/login', { username, password })
      // assign user to state
      .then((user) => {
        console.log('logged in');
        this.setState({ loggedIn: true });
      })
      .catch((error) => console.log(error));
  }

  signupFunction(username, password, confirm) {
    if (password === confirm) {
      axios
        .post('/server/signup', { username: username, password: password })
        .then((user) => {
          if (user) {
            console.log('account created successfully');
            this.setState({ loggedIn: true });
          } else {
            console.log('unsuccess');
          }
        });
    } else {
      console.log('passwords not matched');
    }
  }

  // componentDidMount() {
  //   fetch('/server/cards')
  //     .then((data) => data.json())
  //     .then((data) => dispatch(() => cardSlice(data)));
  // }

  render() {

    return (
      <div>
        <Canvas />
      </div>
    );

    
  }
}

export default App;
