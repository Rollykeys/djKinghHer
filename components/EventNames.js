import Image from "next/image";
import kingher from "../public/assets/disc.jpg";
const EventNames = () => {
  return (
    <div className="bg-[#898AA6] flex flex-col md:flex-row justify-center items-center py-20 text-white w-screen">
      <div className="relative w-8/12  md:w-4/12 mx-12 md:h-[80vh] h-[50vh] md:h-[40vh] rounded-2xl">
        <Image src={kingher} layout="fill" className="rounded-2xl"></Image>
      </div>
      <div className="md:w-2/5 w-3/5 mt-5 ">
        <h1 className=" my-3 md:my-0.5 text-2xl font-bold tracking-widest ">
          Event Name
        </h1>
        <div className="flex flex-col w-full h-2/3 justify-evenly">
          <p className="text:xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
            eveniet laborum error inventore? Molestiae tenetur modi praesentium
            deserunt est? Aliquid nobis harum error expedita voluptas et veniam
            distinctio iste?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            officia?
          </p>
        </div>
        <div className="flex">
          <button className=" py-4 w-32 my-8 rounded-xl mx-3 border-2 border-[#7A4495] bg-transparent hover:bg-[#7A4495]">
            Hello
          </button>
          <button className="bg-[#7A4495] py-4 w-32 my-8 rounded-xl mx-3 hover:border-2 hover:border-[#7A4495] hover:bg-transparent">
            Wassup
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventNames;
