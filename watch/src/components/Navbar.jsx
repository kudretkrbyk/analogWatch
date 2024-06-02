import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuFlag, setMobileMenuFlag] = useState(false);
  const right = mobileMenuFlag ? "0" : "-100%";

  const handleMobileMenu = () => {
    setMobileMenuFlag(!mobileMenuFlag);
  };
  console.log(mobileMenuFlag);

  return (
    <div className="w-full z-50 h-48  absolute ">
      {mobileMenuFlag ? (
        <div
          className="z-50 flex items-start justify-end  w-full h-screen   fixed bg-[#0d2130] duration-500 "
          style={{ right: right }}
        >
          {" "}
          <div className=" z-50 flex  flex-col gap-10 items-center justify-center w-full h-screen bg-[#0d2130]   absolute text-white  ">
            <div>Ana Sayfa</div>
            <div>Abone Ol</div>
          </div>
          <div className="z-50 p-10 py-16">
            {" "}
            <RiCloseLargeLine
              onClick={handleMobileMenu}
              className=" size-7 text-white "
            />
          </div>
        </div>
      ) : (
        <div className="z-40  flex items-center justify-between  fixed w-full p-10  ">
          <div className="w-full">
            {" "}
            <div className="z-40 relative size-24 text-white  ">
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

          <div className="z-40 hidden md:flex items-center justify-end gap-7 text-gray-200  w-full">
            <div>Anasayfa</div>
            <div>Abone Ol</div>{" "}
          </div>
          <GiHamburgerMenu
            onClick={handleMobileMenu}
            className="text-white size-7 inline-block md:hidden "
          />
        </div>
      )}{" "}
    </div>
  );
}
