import React from "react";

export default function Navbar() {
  return (
    <div className="z-50 p-5 flex items-center justify-between w-full fixed">
      <div className="z-50 relative size-24 text-white">
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
      <div className="z-50 flex items-center justify-center gap-2 text-gray-200">
        <div>Anasayfa</div>
        <div>Abone Ol</div>
      </div>
    </div>
  );
}
