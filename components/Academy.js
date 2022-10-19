import Image from "next/image";
import kingher from "../public/assets/paralax.png";

const Academy = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white bg-black w-screen">
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="text-3xl font-bold text-center">King Her Academy</h1>
        <p className="w-2/3 py-5 text-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae vel
          ducimus vero expedita libero?
        </p>
      </div>
      <div className="flex justify-evenly">
        <button className="bg-[#7A4495] py-4 md:w-32 w-24 my-8 rounded-xl mx-3 border-2 border-[#7A4495] hover:border-[#7A4495] hover:bg-transparent">
          Learn
        </button>
        <button className="bg-[#7A4495] py-4 md:w-32 w-24 my-8 rounded-xl mx-3 border-2 border-[#7A4495] hover:border-[#7A4495] hover:bg-transparent">
          Enquire
        </button>
        <button className="bg-[#7A4495] py-4 md:w-32 w-24 my-8 rounded-xl mx-3 border-2 border-[#7A4495] hover:border-[#7A4495] hover:bg-transparent">
          Enroll
        </button>
      </div>
      <div className="relative mb-10 border-2 md:h-[60vh] h-64 w-4/5 md:w-3/5 rounded-2xl border-[#7A4495]">
        {" "}
        <Image src={kingher} layout="fill" className="rounded-2xl"></Image>
      </div>
    </div>
  );
};

export default Academy;
