import React, { Component } from "react";
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <div className="w-2/3 mx-auto">
          <div
            style={{ backgroundImage: "url('xiao.jpg')" }}
            className="h-64 bg-cover flex items-end justify-center relative"
          >
            <div className="relative">
              <img src="yizhan1.jpg" alt="" className=" profile-img" />
              <a href="#" className="edit-profile-photo">
                <i class="fas fa-camera"></i>
              </a>
            </div>
            <a href="#" className="edit-cover-photo">
              <i class="fas fa-camera"></i> Edit Cover Photo
            </a>
          </div>
          <div className="text-center mt-5 text-white">
            <h2 className="text-3xl font-bold">Hsu Myat San</h2>
            <p className="text-gray-500">Tomorrow will be a better day!</p>
            <a href="#" className="text-blue-500 font-bold">
              Edit
            </a>
          </div>
          <div className="mt-2 w-4/5 mx-auto">
            <hr></hr>
            <div className="text-gray-500 font-bold">
              <ul className="">
                <li className="inline-block px-4 rounded hover:bg-gray-900">
                  <a href="#">Timeline</a>
                </li>
                <li className="inline-block p-4 rounded hover:bg-gray-900">
                  <a href="#">Friends</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
