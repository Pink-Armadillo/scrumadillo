import React, { Component } from 'react';

const axios = require('axios');

import Canvas from './Canvas';
//import { useDispatch, useSelector } from 'react-redux';

// merge resolved Sunday 5:46 PM

import Signup from './Signup';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      userId: null,
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
        console.log('logged in -> ', user.data);
        this.setState({ loggedIn: true, username: user.data.username, userId: user.data._id });
      })
      .catch((error) => console.log(error));
  }

  signupFunction(username, password, confirm) {
    if (password === confirm) {
      axios.post('/server/signup', { username: username, password: password }).then((user) => {
        if (user) {
          console.log('account created successfully');
          this.setState({ loggedIn: true, username: user.username, userId: user._id });
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
    let main;
    if (this.state.loggedIn === true) {
      main = <Canvas logout={this.logOut} username={this.state.username} userId={this.state.userId} />;
    } else {
      main = <Login login={this.loginFunction} />;
    }
    return (
      <div>
        {main}
        {/* <Canvas /> */}
      </div>
    );
  }
}

export default App;
