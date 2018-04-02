import React, { Component } from 'react';

class ProfileView extends Component {
  render() {
    var coverStyle = {
      backgroundImage: 'url(' + this.props.profile.profile_cover + ')',
      height: 480,
      width: 900,
      backgroundRepeat: 'no-repeat' 
    };
    return (
      <div className="app-container">
        <div style={coverStyle}></div>
        <div className="profile-detail">
          <div className="row">
            <div className="col-md-2">
              <div className="image-container">
                <img src={this.props.profile.profile_picture} alt={this.props.profile.profile_name}/>
              </div>
            </div>
            <div className="col-md-10">
              <div className="name">
                <b>{this.props.profile.profile_name}</b>
              </div>
              <div className="counts">
                <span><b>{this.props.profile.videos}</b> videos</span> 
                <span><b>{this.props.profile.followers}</b> followers</span> 
                <span><b>{this.props.profile.following}</b> following</span>
              </div>
            <div/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ProfileView;
