import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex py-10 justify-evenly bg-[#413F42] text-white fixed ">
      <div className="w-1/4">
        <h1 className="py-3 text-4xl font-bold text-purple-300">About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem vitae
          reiciendis atque minus explicabo deleniti nesciunt recusandae natus ut
          voluptatibus perspiciatis eum, consequatur maiores culpa quia,
          repellat alias nisi quam.
        </p>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-2xl font-bold text-purple-300 ">Pages</h1>
        <Link href="/">
          <a className="py-0.5 hover:text-purple-300">Home</a>
        </Link>
        <Link href={"/"}>
          <a className="py-0.5 hover:text-purple-300">Listen</a>
        </Link>
        <Link href={"/"}>
          <a className="py-0.5 hover:text-purple-300">Shows</a>
        </Link>
        <Link href={"/"}>
          <a className="py-0.5 hover:text-purple-300">Music</a>
        </Link>
        <Link href={"/"}>
          <a className="py-0.5 hover:text-purple-300">Academy</a>
        </Link>
      </div>
      <div className="">
        <form action="" className="flex flex-col">
          <label htmlFor="" className="text-2xl font-bold text-purple-300">
            Leave Your Email Adress
          </label>
          <div className="my-5">
            {" "}
            <div className="flex justify-between bg-white">
              <input type="email" name="" id="" />
              <FaPaperPlane className="mx-2 my-2 text-3xl text-gray-500 flex-end" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
