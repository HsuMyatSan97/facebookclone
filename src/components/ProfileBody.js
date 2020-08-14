import React, { Component } from "react";

class ProfileBody extends Component {
  render() {
    return (
      <div className="w-2/3 mx-auto">
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <div className="menu-dark p-3 rounded">
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
                    src="yizhan1.jpg"
                    alt=""
                    className="w-32 h-32 object-cover
                    rounded-lg"
                  />
                  <p className="font-bold text-gray-400 text-sm">Xiao Zhan</p>
                </div>
                <div>
                  <img
                    src="yizhan1.jpg"
                    alt=""
                    className="w-32 h-32 object-cover
                    rounded-lg"
                  />
                  <p className="font-bold text-gray-400 text-sm">Wang Yi Bo</p>
                </div>
                <div>
                  <img
                    src="yizhan1.jpg"
                    alt=""
                    className="w-32 h-32 object-cover
                    rounded-lg"
                  />
                  <p className="font-bold text-gray-400 text-sm">Ding Yu Xi</p>
                </div>
                <div>
                  <img
                    src="yizhan1.jpg"
                    alt=""
                    className="w-32 h-32 object-cover
                    rounded-lg"
                  />
                  <p className="font-bold text-gray-400 text-sm">Zhao Lusi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 bg-green-500">World</div>
        </div>
      </div>
    );
  }
}

export default ProfileBody;
