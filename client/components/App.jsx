import React, { Component } from 'react';

const axios = require('axios');

import Canvas from './Canvas';
<<<<<<< HEAD
=======

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {NavBar} from './NavBar'

>>>>>>> 20c6b366ab648a2fae37b839a75590fd32859be0
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
      showSignUp: false
    };
    this.loginFunction = this.loginFunction.bind(this);
    this.logOut = this.logOut.bind(this);
    this.signupFunction = this.signupFunction.bind(this);
    this.github = this.github.bind(this);
    // this.showSignUpFunction = this.showSignUpFunction.bind(this)
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
          alert('account created successfully')
          window.location.href="http://localhost:8080/"

          this.setState({ loggedIn: true, username: user.username, userId: user._id });
        } else {
          console.log('unsuccess');
        }
      });

    } else {
      console.log('passwords not matched');
    }
  }

  github() {
    if (true) {
      console.log('github')
      axios.post("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/authorize", { params: { client_id: 'fade47f049a7b9f4a3dc'}, headers: {"Access-Control-Allow-Origin": "*" }})
      .then(data => console.log('dataaa', data))
      .catch(err => console.log('errrr', err))
    }
    
  }


  // showSignUpFunction() {

  //   this.setState({ showSignUp: true });
  //   console.log('in show sign up')
  // }

  // componentDidMount() {
  //   fetch('/server/cards')
  //     .then((data) => data.json())
  //     .then((data) => dispatch(() => cardSlice(data)));
  // }

  render() {
    let main;
    if (this.state.loggedIn === true) {

      main = <Canvas logout={this.logOut} />;
    } 
    else if (this.state.loggedIn === false) {
      main = <Login login={this.loginFunction} github={this.github} />;
    } 

    return (
        <div className="App"> 
      <Router>
          <Switch>
            
            <Route exact path="/:username" render={ () => <Login login={this.loginFunction }/>} />
            <Route exact path="/" render={() => main}/>
            <Route path="/signup" render={ () => <Signup signup={this.signupFunction }/>} />
          </Switch>
      </Router>
        </div>

    );
  }
}

export default App;
