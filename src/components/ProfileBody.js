import React, { Component } from "react";

class ProfileBody extends Component {
  render() {
    return (
      <div className="w-2/3 mx-auto">
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <div className="card">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-gray-200 font-bold">Friends</h2>
                <a
                  href="#"
                  className="text-blue-500 font-bold p-2 rounded hover:bg-gray-900"
                >
                  See all
                </a>
              </div>

              <h4 className="text-gray-400">568 friends</h4>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div>
                  <img
                    src="xiao1.jpg"
                    alt=""
                    className="w-32 h-32 object-cover
                    rounded-lg"
                  />
                  <p className="font-bold text-gray-400 text-sm">Xiao Zhan</p>
                </div>
                <div>
                  <img
                    src="wangyibo.jpg"
                    alt=""
                    className="w-32 h-32 object-cover
                    rounded-lg"
                  />
                  <p className="font-bold text-gray-400 text-sm">Wang Yi Bo</p>
                </div>
                <div>
                  <img
                    src="yuxi.jpg"
                    alt=""
                    className="w-32 h-32 object-cover
                    rounded-lg"
                  />
                  <p className="font-bold text-gray-400 text-sm">Ding Yu Xi</p>
                </div>
                <div>
                  <img
                    src="lusi.jpg"
                    alt=""
                    className="w-32 h-32 object-cover
                    rounded-lg"
                  />
                  <p className="font-bold text-gray-400 text-sm">Zhao Lusi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="card">
              <div className="flex border-b border-gray-800 pb-3">
                <img
                  src="cat.webp"
                  className="w-16 h-16 rounded-full object-cover"
                  alt=""
                />

                <input
                  type="text"
                  className="flex-1 m-2 rounded-full bg-input px-3 text-white outline-none"
                  placeholder="What's on your mind"
                />
              </div>
              <div className="flex justify-evenly mt-2">
                <a href="#" className="btn-primary">
                  <i class="fas fa-photo-video text-green-500 mr-2"></i>
                  Photo/Video
                </a>
                <a href="#" className="btn-primary">
                  <i class="fas fa-paper-plane text-blue-500 mr-2"></i>
                  Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileBody;
