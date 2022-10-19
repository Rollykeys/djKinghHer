import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-cover bg-hero-pattern h-96 sm:h-screen my-0 w-screen z-0 overflow-y-hidden">
      {/* <Navbar /> */}
      <div className="h-[50vh] overflow-y-hidden  text-[#F9F9F9] items-center flex sm:h-screen sm:mt-32 ">
        <h1 className="flex flex-col w-40 mt-20 mx-10 text-sm font-bold uppercase sm:mb-72 sm:text-xl sm:text-6xl sm:m-20 sm:text-5xl sm:w-96">
          <span className="pl-5 md:h-[25vh]">
            Music is as a safe kind of high
          </span>
          <button className=" font-normal text-lg md:text-3xl py-2 md:py-8 w-32 md:w-48 my-4 rounded-xl mx-3 border-2 border-[#7A4495] bg-[#7A4495] hover:bg-transparent uppercase">
            Book
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
