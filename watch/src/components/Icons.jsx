import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Icons() {
  return (
    <div className="z-50 flex flex-col gap-2 items-center justify-center w-[100px] fixed text-white top-1/2 right-0">
      <FaFacebookF className="size-6" />
      <FaTwitter className="size-6" />
      <FaInstagram className="size-6" />
    </div>
  );
}
