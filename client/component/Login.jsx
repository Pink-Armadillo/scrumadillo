// Client ID
// fade47f049a7b9f4a3dc
// Client Secret
// 927eba2bb044fded4ae56cf2e26cda3152d6135e

import React from 'react';
const axios = require('axios')

class Login extends React.Component {
  
  // check username and password with database 
  loginFunction(username, password) {
    axios.get('/login', {username, password} )
    // assign user to state
    .then (user => console.log(user))
    .catch(error => console.log(error)) 
  }

  render() {
    return (
      <form id="login-form">
        <h2>Log In</h2>
        <br></br>
        <input
          id="input-username"
          name="username"
          type="text"
          placeholder="Username">
        </input>
        <br></br>
        <input
          id="input-password"
          name="password"
          type="text"
          placeholder="Password">
        </input>
        <br></br>
        <button onClick={this.loginFunction(
          document.getElementById('input-username').value,
          document.getElementById('input-password').value,
        )}>Login
        </button>
        <div>
          <button>
            <img id="github-logo" src="https://www.backblaze.com/blog/wp-content/uploads/2018/05/github-logo.png" />
          </button>
          <button>
            <img id="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png" />
          </button>

        </div>
      </form>
    )
  }
}


export default Login;