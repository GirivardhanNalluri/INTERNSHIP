import React, { Component } from 'react';
import "./SignUp.css";
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      name: '',
      userName: '',
      password: ''
    };
  }

  newSignUp = () => {
    const { emailId, name, userName, password } = this.state;

    axios.post('/users', {
      email: emailId,
      name,
      userName,
      password
    })
      .then(response => {
        // Handle successful user registration
        console.log(response.data); // Replace with your desired action
        localStorage.setItem('users', JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(error => {
        // Handle error
        console.error(error.response.data); // Replace with your desired action
      });
  }

  render() {
    return (
      <div>
        <input
          className="logipage__text"
          onChange={(event) => { this.setState({ emailId: event.currentTarget.value }) }}
          type="text"
          placeholder="Mobile number or Email"
        />
        <input
          className="logipage__text"
          onChange={(event) => { this.setState({ name: event.currentTarget.value }) }}
          type="text"
          placeholder="Full Name"
        />
        <input
          className="logipage__text"
          onChange={(event) => { this.setState({ userName: event.currentTarget.value }) }}
          type="text"
          placeholder="Username"
        />
        <input
          className="logipage__text"
          onChange={(event) => { this.setState({ password: event.currentTarget.value }) }}
          type="password"
          placeholder="Password"
        />
        <button className="login__button" onClick={this.newSignUp}>Sign up</button>
      </div>
    );
  }
}

export default SignUp;
