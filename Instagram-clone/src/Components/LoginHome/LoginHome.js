import React, { Component } from 'react';
import axios from 'axios';
import "./LoginHome.css";
import Home from './Home'; // Import the Home component

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: 'username',
      password: 'password',
      isLoggedIn: false,
      showPopup: false // New state to control popup visibility
    };
  }

  login = () => {
    const { emailId, password } = this.state;
    axios.post('/login', { email: emailId, password })
      .then(response => {
        console.log(response.data);
        this.setState({ isLoggedIn: true, showPopup: true }); // Set showPopup to true on successful login
        localStorage.setItem('isLoggedIn', true);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }

  closePopup = () => {
    this.setState({ showPopup: false }); // Function to close the popup
  }

  render() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      return <Home />;
    }

    return (
      <div>
        {this.state.showPopup && (
          <div className="popup">
            <p>Login successful!</p>
            <button onClick={this.closePopup}>Close</button>
          </div>
        )}
        <input
          className="logipage__text"
          onChange={(event) => { this.setState({ emailId: event.currentTarget.value }) }}
          type="text"
          placeholder="Phone number, username, or email"
        />
        <input
          className="logipage__text"
          onChange={(event) => { this.setState({ password: event.currentTarget.value }) }}
          type="password"
          placeholder="Password"
        />
        <button className="login__button" onClick={this.login}>Log In</button>
      </div>
    );
  }
}

export default SignIN;
