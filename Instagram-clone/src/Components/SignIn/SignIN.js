import React, { Component } from 'react';


import "../LoginPage/LoginPage"

class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId: 'username',
            password: 'password',
            isLoggedIn: false 
        }
    }

    handleUsernameChange = (event) => {
        this.setState({ emailId: event.currentTarget.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.currentTarget.value });
    }

    render() { 
        return ( 
            <div>
                <input
                    className="logipage__text"
                    onChange={this.handleUsernameChange}
                    type="text"
                    placeholder="Phone number, username, or email"
                />
                <input
                    className="logipage__text"
                    onChange={this.handlePasswordChange}
                    type="password"
                    placeholder="Password"
                />
                <button className="login__button" onClick={this.login}>Log In</button>
            </div> 
        );
    }
}
 
export default SignIN;
