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
        <div className="separator"></div>
        <div className="video-section">
          <div className="text-center"><span className="title"><b>Videos</b></span></div>
          <div className="row">
            {this.props.profile.video_content.map((item) => {
            return(
            <div className="col-md-6">
            <div className="vid-container">
              <div className="image-container text-center"> 
                <img src={item.image} alt={item.title}/>
                <span className="views">
                  <svg width="16px" height="16px"viewBox="0 0 16 16" x="0px" y="0px"><path fill="#ffffff" d="M11,13H5L1,9V8V7l4-4h6l4,4v1v1L11,13z M8,5C6.344,5,5,6.343,5,8c0,1.656,1.344,3,3,3c1.657,0,3-1.344,3-3C11,6.343,9.657,5,8,5z M8,9C7.447,9,7,8.552,7,8s0.447-1,1-1s1,0.448,1,1S8.553,9,8,9z"></path></svg>

                  {item.views}
                </span>
                <span className="length">
                  <svg width="16px" height="16px" viewBox="0 0 16 16" x="0px" y="0px"><path fill="#ffffff" d="M8,14c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6S11.313,14,8,14z M8,3C5.238,3,3,5.238,3,8s2.238,5,5,5s5-2.238,5-5S10.762,3,8,3z M9.646,10.354l-2-2L7.515,7.879l1-4l0.971,0.242L8.554,7.847l1.8,1.8L9.646,10.354z"></path></svg>

                  {item.length}
                </span>
              </div>
              <div className="desc text-center truncate" title={item.title}>{item.title}</div>
            </div>
            </div>
           
            )       
            })}
          </div>
        </div>
      </div>  
    );
  }
}

export default ProfileView;
