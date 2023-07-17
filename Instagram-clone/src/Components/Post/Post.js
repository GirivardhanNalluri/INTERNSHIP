import React, { Component } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import postimage from '../../images/post.jpg';
import postimage1 from '../../images/actorprabhas.jpg';
import love from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';
import Grid from '@material-ui/core/Grid';
import harsha from '../../images/harsha.jpg'
import insta_log from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";
import search from "../../images/search.jpg";
import reels from "../../images/reels.jpg";
import create from "../../images/upload2.jpg";
import dp from "../../images/dp6.png";
import more from "../../images/more.jpg";

import imageSrc1 from '../../images/codegnan.jpg'
import imageSrc2 from '../../images/jahnavi.jpg'
import imageSrc3 from '../../images/pp3.jpeg'
import imageSrc4 from '../../images/harsha.jpg'
import imageSrc5 from '../../images/pp1.png'
//import { upload } from '@testing-library/user-event/dist/upload';
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      showPostButton: false,
    };
  }

  handleCommentChange = (event) => {
    // Handle comment input change here
  };

  handlePostComment = () => {
    // Handle posting of comment here
  };

  togglePostButton = () => {
    this.setState((prevState) => ({
      showPostButton: !prevState.showPostButton,
    }));
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    // Fetch comments from MongoDB or your API
    // Update the commentList state with the fetched comments
    // Example:
    const comments = [
      { id: 1,
        
         username: 'giri', comment: 'Nice' },
      { id: 2, username: 'harsha', comment: 'amazing' },
    ];
    this.setState({ commentList: comments });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
          <div className="navbar__barContent">
  <div className="navbar__logoContainer">
    <img className="navbar_logo" src={insta_log} width="105px" alt="Instagram Logo" />
  </div>
  <div className="navbar__menuContainer">
  <div className="navbar__menuItem">
  <img className="navbar__img" src={home} width="25px" alt="Home" />
  <span className="navbar__text">Home</span>
</div>
<div className="navbar__menuItem">
  <img className="navbar__img" src={search} width="25px" alt="Search" />
  <span className="navbar__text">Search</span>
</div>
<div className="navbar__menuItem">
  <img className="navbar__img" src={find} width="25px" alt="Explore" />
  <span className="navbar__text">Explore</span>
</div>
<div className="navbar__menuItem">
  <img className="navbar__img" src={reels} width="25px" alt="Reels" />
  <span className="navbar__text">Reels</span>
</div>
<div className="navbar__menuItem">
  <img className="navbar__img" src={message} width="25px" alt="Messages" />
  <span className="navbar__text">Messages</span>
</div>
<div className="navbar__menuItem">
  <img className="navbar__img" src={react} width="25px" alt="Notifications" />
  <span className="navbar__text">Notifications</span>
</div>
<div className="navbar__menuItem">
  <img className="navbar__img" src={create} width="25px" alt="Create" />
  <span className="navbar__text">Create</span>
</div>
<div className="navbar__menuItem">
  <Avatar
    src={dp}
    className="navbar__img"
    style={{ maxWidth: "25px", maxHeight: "25px" }}
    alt="Profile"
  />
  <span className="navbar__text">Profile</span>
</div>
<div className="navbar__menuItem">
      <img className="navbar__img" src={more} width="25px" alt="More" />
      <span className="navbar__text">More</span>
    </div>

  </div>
</div>
          </Grid>
          <Grid item xs={6}>
            <div className="post__container">
              {/* Header */}
              <div className="post__header">
                <Avatar className="post__image" src="" />
                <div className="post__username">{this.props.userName}</div>
                <div>girivardhan . 2week</div>
              </div>

              {/* Image */}
              <div>
                <img src={postimage} width="600px" height="500px" alt="Post" />
              </div>
              

              {/* Analytics */}
              <div>
                <div style={{ marginLeft: '10px' }}>
                  <img src={love} className="post_reactimage" alt="Like" />
                  <img src={comment} className="post_reactimage" alt="Comment" />
                  <img src={share} className="post_reactimage" alt="Share" />
                </div>
                <div style={{ fontWeight: 'bold', marginLeft: '20px' }}>
                  {this.props.likes} Liked by harsha_nalluri and 455likes
                </div>
              </div>

              {/* Comment Section */}
              <div className="post__commentSection">
                {this.state.commentList.map((comment) => (
                  <div className="post__comment" key={comment.id}>
                    <span className="post__commentUsername">{comment.username}</span>:{' '}
                    {comment.comment}
                  </div>
                ))}

                <div className="post__commentBoxContainer">
                  <input
                    type="text"
                    className="post__commentbox"
                    placeholder="Add a comment..."
                    onChange={this.handleCommentChange}
                    onFocus={this.togglePostButton}
                    onBlur={this.togglePostButton}
                  />
                  {this.state.showPostButton && (
                    <button className="post__postButton" onClick={this.handlePostComment}>
                      Post
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="post__container">
              {/* Header */}
              <div className="post__header">
                <Avatar className="post__image" src={harsha} />
                <div className="post__username">{this.props.userName}</div>
                <div>harsha_nalluri . 1week</div>
              </div>

              {/* Image */}
              <div>
                <img src={postimage1} width="600px" height="500px" alt="Post" />
              </div>
              

              {/* Analytics */}
              <div>
                <div style={{ marginLeft: '10px' }}>
                  <img src={love} className="post_reactimage" alt="Like" />
                  <img src={comment} className="post_reactimage" alt="Comment" />
                  <img src={share} className="post_reactimage" alt="Share" />
                </div>
                <div style={{ fontWeight: 'bold', marginLeft: '20px' }}>
                  {this.props.likes} Liked by girivardhan and 653likes
                </div>
              </div>

              {/* Comment Section */}
              <div className="post__commentSection">
                {this.state.commentList.map((comment) => (
                  <div className="post__comment" key={comment.id}>
                    <span className="post__commentUsername">{comment.username}</span>:{' '}
                    {comment.comment}
                  </div>
                ))}

                <div className="post__commentBoxContainer">
                  <input
                    type="text"
                    className="post__commentbox"
                    placeholder="Add a comment..."
                    onChange={this.handleCommentChange}
                    onFocus={this.togglePostButton}
                    onBlur={this.togglePostButton}
                  />
                  {this.state.showPostButton && (
                    <button className="post__postButton" onClick={this.handlePostComment}>
                      Post
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
          <div>
            <div className="suggestions__container">
                <div className="suggestions__header">
                    <div>Suggested For You</div>
                </div>
                <div className="suggestions__body">
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc1} className="suggestions__image"/>
                        <div className="suggestions__username">Codegnan</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc2} className="suggestions__image"/>
                        <div className="suggestions__username">_jahnavi_29</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">Anjali</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc4} className="suggestions__image"/>
                        <div className="suggestions__username">_harshavardhan29</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc5} className="suggestions__image"/>
                        <div className="suggestions__username">Anirudh</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="loginPage__footer">
          <div className="loginPage__footerContent">
            <span>About.</span>
            <span>Help.</span>
            <span>API.</span>
            <span>Jobs.</span>
            <span>Privacy.</span>
            <span>Terms.</span>
            <span>Locations.</span>
            </div>
            <div className="loginPage__footerLine">
              <span>Languages.</span>
            <span>Meta Verified</span>
            
            </div>
           
         
          <div className="loginPage__footerLine">

    <span>© 2023 Instagram from Meta</span>
  </div>
        </div>


          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Post;
