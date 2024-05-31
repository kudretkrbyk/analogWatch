import React from "react";

export default function Navbar() {
  return (
    <div className="z-50  flex items-center justify-between  fixed w-full p-10 px-12">
      <div className="w-full">
        {" "}
        <div className="z-50 relative size-24 text-white  ">
          <div className="absolute bg-gray-400 w-36 h-48 opacity-50 -top-10 -left-5 p-5"></div>
          <svg
            className="text-white"
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            role="presentation"
            aria-hidden="true"
          >
            <g>
              <path d="M196,52V4H4v192h192v-48h4v52H0V0h200v52H196z"></path>
            </g>
          </svg>
          <div className=" text-xl absolute top-8 -right-5">Skyline</div>
        </div>
      </div>

      <div className="z-50 flex items-center justify-end gap-7 text-gray-200  w-full">
        <div>Anasayfa</div>
        <div>Abone Ol</div>
      </div>
    </div>
  );
}
