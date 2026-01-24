import Aurora from "./Aurora";
import consortium from "../assets/consortium.png";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="bg-black h-150">
          <Aurora colorStops={["#f95858", "#b80000", "#8f8f8f"]} />
        </div>

        <div className="bg-transparent absolute inset-0 mt-50 z=1">
          <div className="flex justify-center items-center relative">
            <img
              className="fade-in relative w-380 p-1"
              src={consortium}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-10 items-center mt-10 md:flex-row md:justify-center">
            <a
              href="#events"
              className="w-70 bg-linear-to-tr from-red-800 to-red-500 text-white shadow-lg text-2xl font-montserrat text-center rounded-2xl font-bold p-5 slide-in hover:scale-105 transition-transform"
            >
              REGISTER
            </a>
            <a
              href=""
              className="w-70 text-white text-2xl font-montserrat font-bold border-white border p-5 rounded-2xl text-center slide-in hover:scale-105 transition-transform"
            >
              SCHEDULE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
