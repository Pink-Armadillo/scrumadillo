import React, { Component } from 'react';

const axios = require('axios');

import Canvas from './Canvas';
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

  render() {
    let main;
    if (this.state.loggedIn === false) {
      main = <Login login={this.loginFunction} />;
    } else {
      main = <Canvas logout={this.logOut} />;
    }
    return <div>{main}</div>;
  }
}

export default App;
