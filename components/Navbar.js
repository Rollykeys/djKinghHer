import logo from "../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [Navbar, setNavbar] = useState(false);
  return (
    <div className="fixed w-screen flex flex-row sm:flex-col my-0 sm:items-center sm:justify-center justify-between text-white bg-[#7A4495] z-50 sm:bg-black">
      <div className="">
        <div className="relative w-12 h-16 my-3 mx-10">
          <Image src={logo} layout="fill" />
        </div>
      </div>
      <div className="my-5 mx-10 text-3xl flex flex-col justify-evenly items-end sm:items-center sm:justify-center sm:w-screens  ">
        <div
          className="sm:hidden"
          onClick={() => {
            setNavbar(!Navbar);
          }}
        >
          <FaBars />
        </div>
        <div
          className={
            Navbar
              ? `flex flex-col fixed top-[0vh] mt-16 py-20 ease-in-out bg-[#7A4495] w-[30vh] right-[0vh] transition-all duration-1000 sm:flex-row `
              : `flex flex-col  sm:w-screen fixed top-[0vh] mt-16 py-20 ease-in-out bg-[#7A4495] w-[30vh] left-[100vh] sm:left-0 transition-all duration sm:flex-row sm:justify-center sm:py-3 sm:bg-transparent`
          }
        >
          <Link href="./">
            <a className="px-5 my-3 text-xl hover:scale-150">Home</a>
          </Link>
          <Link href="./">
            <a className="px-5 my-3 text-xl hover:scale-150">Shop</a>
          </Link>
          <Link href="./">
            <a className="px-5 my-3 text-xl hover:scale-150">Music</a>
          </Link>
          <Link href="./">
            <a className="px-5 my-3 text-xl hover:scale-150">Shows</a>
          </Link>
          <Link href="./">
            <a className="px-5 my-3 text-xl hover:scale-150">Academy</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
