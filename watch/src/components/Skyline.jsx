import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Skyline() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 p-6">
      <div className="text-2xl font-bold">SKYLINE</div>
      <div className="w-80 text-center">
        Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi
        eklemek ve yazı tipini değiştirmek için “Metni Düzenle” düğmesine
        tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak ve
        kullanıcılarınıza kendinizi tanıtmak için harika bir yer.
      </div>
      <div>Abone olun, açıldığımızı ilk siz öğrenin</div>
      <div className="flex flex-col items-start justify-start  ">
        <div>E-posta*</div>

        <div className="flex gap-2 items-center justify-start">
          <input
            className=" p-2 px-4"
            placeholder="E-posta adresinizi girin*"
          ></input>{" "}
          <div>
            <button className="bg-[#0e2e47] p-2 text-white border border-[#0e2e47] hover:text-[#0e2e47] hover:bg-white duration-300">
              Hemen Abone Ol
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        {" "}
        <FaFacebookF className="size-6" />
        <FaTwitter className="size-6" />
        <FaInstagram className="size-6" />
      </div>
      <div></div>
    </div>
  );
}
