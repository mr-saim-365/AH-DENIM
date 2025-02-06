// import { ArrowRight } from 'lucide-react';
import heroImage from "../../public/images/Hero-image.jpg";
import BlurText from "./UI/BlurText";

const Hero = () => {
  return (
    <div className="h-[50vh] md:h-[80vh] mt-16 md:mt-20">
      <div className="md:flex h-full w-full">
        {/* Left Text Section */}
        <div className="container md:w-[45%] lg:w-[40%] flex items-center justify-center px-6">
          <div className=" md:p-6 flex items-center flex-col md:block justify-center text-[#ffffff] lg:text-[#222222] absolute top-64 left-0 right-0 md:static">
            <h4 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] 2xl:text-[4.5rem] font-extrabold uppercase leading-tight tracking-wide hover:scale-105 transition-transform duration-500 ease-in-out">
              The Denim Renaissance
            </h4>
            <br />
            <BlurText
              text="WHERE YOUR STYLE BEGINS"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] 2xl:text-[2rem] md:mb-8 font-semibold"
            />

            <p className="mt-4 text-sm sm:text-base">
              This winter’s luxury vest palette for men & women.
            </p>

            <button className="mt-6 px-3 md:px-6 py-3 bg-[#222222] text-white uppercase font-semibold rounded-lg hover:bg-gray-900 transition">
              Explore Now
            </button>
          </div>
        </div>
        <div className="w-full h-full md:w-[70%]">
          <img src={heroImage} className="h-full w-full object-cover"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
