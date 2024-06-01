import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsArrowUpSquareFill } from "react-icons/bs";

export default function Skyline() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-10 p-6">
      <div className="z-40 bg-gradient-to-b from-transparent from-10% to-white to-40% w-full h-screen absolute"></div>
      <div className="z-50 text-2xl font-bold">SKYLINE</div>
      <div className="z-50 w-[500px] text-center">
        Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi
        eklemek ve yazı tipini değiştirmek için “Metni Düzenle” düğmesine
        tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak ve
        kullanıcılarınıza kendinizi tanıtmak için harika bir yer.
      </div>
      <div className="z-50 font-bold">
        Abone olun, açıldığımızı ilk siz öğrenin
      </div>
      <div className="z-50 flex flex-col items-start justify-start  ">
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

      <div className="z-50 flex items-center justify-center gap-5">
        {" "}
        <FaFacebookF className="size-6" />
        <FaTwitter className="size-6" />
        <FaInstagram className="size-6" />
      </div>
      <div className="flex z-50 items-center justify-center gap-5 absolute bottom-0   p-5 ">
        <div>© 2035, Skyline. Wix.com ile oluşturuldu. </div>
        <div>
          <BsArrowUpSquareFill
            className="text-[#0e2e47] size-10"
            onClick={scrollToTop}
          />
        </div>
        <div>Gizlilik Politikas</div>
        <div>Çerez Politikası</div>
      </div>
    </div>
  );
}
