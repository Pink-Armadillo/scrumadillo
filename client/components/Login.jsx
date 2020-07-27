import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  // check username and password with database
  render() {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          id="login-form"
          style={{
            border: '1px solid black',
            display: 'inline-block',
            textAlign: 'center',
            maxWidth: '650px',
            minHeight: '400px',
            padding: '25px',
            paddingBottom: '5px',
            borderRadius: '4px',
            borderWidth: '1px',
            border: 'solid',
            borderColor: '#D9DCE0',
          }}
        >
          <img
            src="../logoDarkGray.png"
            style={{ width: '300px', marginBottom: '15px' }}
          ></img>
          <br></br>
          <input
            id="input-username"
            name="username"
            type="text"
            placeholder="Username"
            style={{
              marginBottom: '10px',
              width: '366px',
              height: '54px',
              borderRadius: '4px',
              border: 'solid 1px',
              borderColor: '#D9DCE0',
              paddingLeft: '15px',
            }}
          ></input>
          <br></br>
          <input
            id="input-password"
            name="password"
            type="password"
            placeholder="Password"
            style={{
              marginBottom: '10px',
              width: '366px',
              height: '54px',
              borderRadius: '4px',
              border: 'solid 1px #D9DCE0',
              paddingLeft: '15px',
            }}
          ></input>
          <br></br>
          {/* <Link to="/"> */}
          <button
            onClick={(event) => {
              event.preventDefault();
              this.props.login(
                document.getElementById('input-username').value,
                document.getElementById('input-password').value
              );
            }}
            style={{
              width: '120px',
              height: '40px',
              marginTop: '10px',
              marginBottom: '25px',
              border: 'solid 1px #f9f9f9',
              backgroundColor: '#9cdaf0',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              borderRadius: '4px',
            }}
          >
            Login
          </button>
          {/* </Link> */}
          <Link to="/signup">
          <button
            style={{
              width: '120px',
              height: '40px',
              marginTop: '10px',
              marginBottom: '25px',
              border: 'solid 1px #f9f9f9',
              backgroundColor: '#9cdaf0',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              borderRadius: '4px',
            }}
          >
            Sign Up
          </button>
          </Link>
          <br></br>
          {/*  */}
          {/* <button onClick={ (e) => {e.preventDefault(); console.log('for github'); this.props.github()}}>
            <img
              id="github-logo"
              src="https://www.backblaze.com/blog/wp-content/uploads/2018/05/github-logo.png"
              style={{ width: '250px' }}
            />
          </button> */}
          <a href="https://github.com/login/oauth/authorize?client_id=fade47f049a7b9f4a3dc">
            <img
              id="github-logo"
              src="https://www.backblaze.com/blog/wp-content/uploads/2018/05/github-logo.png"
              style={{ width: '250px' }}
            />
          </a>
          {/* <button>
            <img
              id="google-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
            />
          </button> */}
        </form>
      </div>
    );
  }
}

export default Login;
