import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ProfileBody />
      </div>
    );
  }
}

export default Profile;
