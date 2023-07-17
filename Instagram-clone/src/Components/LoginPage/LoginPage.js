import React, { Component } from 'react';
import './LoginPage.css';
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/img1.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIN from '../SignIn/SignIN';
import SignUp from '../SignUp/SignUp';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isLogin: true
    };
  }

  changeLogin = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin
    }));
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <img src={inst_image} alt="Loginpageimage" width="460px" />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage__logo" src={insta_logo} alt="logo" />
                  <div className="loginPage__signin">
                    {this.state.isLogin ? <SignIN /> : <SignUp />}
                    <div className="login__ordiv">
                      <div className="login__dividor"></div>
                      <div className="login__or">OR</div>
                      <div className="login__dividor"></div>
                    </div>
                    <div className="login__fb">
                      <img src={fb} width="15px" alt="facebook" style={{ "marginRight": "5px" }} />Log in with Facebook
                    </div>
                    <div className="login_forgt"> Forgot password?</div>
                  </div>
                </div>

                <div className="loginpage__signupoption">
                  {this.state.isLogin ?
                    <div className="loginPage__signin">
                      Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign up</span>
                    </div> :
                    <div className="loginPage__signup">
                      Have an account? <span onClick={this.changeLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign in</span>
                    </div>
                  }
                </div>

                <div className="loginPage__downloadSection">
                  <div>
                    Get the app.
                  </div>
                  <div className="loginPage__option">
                    <img className="loginPage_dwimg" alt="appstore" src={appstore} width="136px" />
                    <img className="loginPage_dwimg" alt="playstore" src={playstore} width="136px" />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>

        <div className="loginPage__footer">
          <div className="loginPage__footerContent">
            <span>About</span>
            <span>Blog</span>
            <span>Jobs</span>
            <span>Help</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Top Accounts</span>
            <span>Locations</span>
            <span>Instagram Lite</span>
            <span>Contact</span>
            <span>Uploading & Non-Users</span>
            <span>Meta</span>
            <span>Verified</span>
          </div>
          <div className="loginPage__footerLine">
    <span>English</span>
    <span>︿</span>
    <span>© 2023 Instagram from Meta</span>
  </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
