// import { ArrowRight } from 'lucide-react';
import heroImage from "/images/Hero-image.jpg";
import BlurText from "./UI/BlurText";

const Hero = () => {
  return (
    <div className="h-[50vh] sm:h-[70vh] md:h-[80vh] mt-[70px] md:mt-20">
      <div className="md:flex h-full w-full">
        {/* Left Text Section */}
        <div className="container md:w-[45%] lg:w-[40%] flex items-center justify-center px-6">
          <div className=" md:py-6 mb-10 md:px-0 flex items-center flex-col md:block justify-center text-[#ffffff] lg:text-[#222222] absolute h-[48%] sm:h-[68%] md:h-auto mt-20 md:mt-0 top-0 bottom-0 left-0 right-0 md:static">
            <h4 className="text-[1.2rem] sm:text-[2rem] mb-3 md:text-[2.5rem] lg:text-[3rem] 2xl:text-[3.5rem] font-extrabold uppercase leading-tight tracking-wide hover:scale-105 transition-transform duration-500 ease-in-out">
              AH Denim
            </h4>
            <BlurText
              text="WHERE PASSION MEETS FABRIC"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[1rem] sm:text-[1.5rem] md:text-[1.2rem] 2xl:text-[1.5rem] md:mb-3 font-semibold "
            />

            <button className="mt-3 px-2 md:px-6 md:py-4 py-2 bg-[#222222] text-[#ffffff] md:bg-[#ffffff] md:text-[#222222] lg:bg-[#222222] lg:text-[#ffffff] text-xs md:text-[16px] uppercase font-semibold rounded-lg hover:bg-gray-900 transition">
              Explore Now
            </button>
          </div>
        </div>
        <div className="w-full h-full md:w-[70%] 2xl:w-[90%]">
          <img src={heroImage} className="h-full w-full object-cover"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
