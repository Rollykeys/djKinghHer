import Image from "next/image";
import kingher from "../public/assets/paralax.png";

const Event = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-white md:flex-row  bg-black w-screen">
      <div className="relative h-56 m-10 w-80">
        <Image src={kingher} layout="fill" className="rounded-2xl" />
      </div>
      <div className="flex flex-col justify-center items-center w-72">
        <h1 className="m-5 text-xl font-bold tracking-widest text-center uppercase">
          Having an Event ?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae!
        </p>
        <button className=" py-4 w-48 my-8 rounded-xl mx-3 border-2 border-[#7A4495] bg-transparent hover:bg-[#7A4495]">
          Book DJ King Her
        </button>
      </div>
    </div>
  );
};

export default Event;
