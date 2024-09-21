"use client";

import {
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container m-auto mt-20 px-8 lg:px-20">
      <div className="flex justify-center items-center gap-4 lg:gap-10 relative p-8 w-fit m-auto">
        <div className="w-full h-1 rounded-full bg-slate-800 absolute top-0"></div>
        <a
          className="flex justify-center items-center size-10 hover:bg-slate-700 rounded-md duration-300"
          href="#!"
        >
          <FaXTwitter />
        </a>
        <a
          className="flex justify-center items-center size-10 hover:bg-slate-700 rounded-md duration-300"
          href="#!"
        >
          <FaFacebookF />
        </a>
        <a
          className="flex justify-center items-center size-10 hover:bg-slate-700 rounded-md duration-300"
          href="#!"
        >
          <FaYoutube />
        </a>
        <a
          className="flex justify-center items-center size-10 hover:bg-slate-700 rounded-md duration-300"
          href="#!"
        >
          <FaTelegram />
        </a>
        {/* <a href="#"></a> */}
      </div>
    </footer>
  );
};

export default Footer;
