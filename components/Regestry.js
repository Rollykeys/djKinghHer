import Image from "next/image";
import kingher from "../public/assets/disc.jpg";

const Regestry = () => {
  return (
    <div className="bg-black flex items-center py-10 justify-center text-white">
      <form
        action=""
        className=" bg-[#413F42] rounded-xl flex flex-col items-center px-20 py-10 justify-evenly"
      >
        <h1 className="uppercase font-bold text-xl pt-8">
          Registry For the Academy
        </h1>
        <div>
          <div className="flex flex-col my-10 w-60">
            <label className="text-gray-300" htmlFor="">
              name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-[#413F42] border-b-2 border-[#7A4495] py-4 my-3"
            />
          </div>
          <div className="flex flex-col my-10 w-60">
            <label className="text-gray-300" htmlFor="">
              phone
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="bg-[#413F42] border-b-2 border-[#7A4495] py-4 my-3 w-screen"
            />
          </div>
          <div className="flex flex-col my-10 w-60">
            <label className="text-gray-300" htmlFor="">
              address
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-[#413F42] border-b-2 border-[#7A4495] py-4 my-3"
            />
          </div>
          <div className="flex flex-col my-10 w-60">
            <label className="text-gray-300" htmlFor="">
              email
            </label>
            <input
              type="email"
              name=""
              id=""
              className="bg-[#413F42] border-b-2 border-[#7A4495] py-4 my-3"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-[#7A4495] py-3 px-10 rounded-xl hover:bg-[transparent] hover:border-b-2 hover:border-[#7A4495] text-lg"
        />
      </form>
      <div className="w-3/12 h-[70vh] relative mx-10">
        <Image src={kingher} layout="fill" />
      </div>
    </div>
  );
};

export default Regestry;
