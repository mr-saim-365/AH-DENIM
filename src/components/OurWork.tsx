import OurWorkVideo from "/OurWorkVideo.mp4";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <>
      <div className=" md:flex md:gap-[60px] md:px-5 2xl:mx-auto items-center py-20 justify-between">
        <div className="text-[#4D4D4D] flex flex-col px-5 py-10 md:w-[60%] md:h-[50vh] lg:px-0 lg:w-[70%]">
          <div className="flex flex-col gap-8">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] font-bold font-Arabic text-[#4D4D4D]">
              Who we are
            </h2>
            <div className="text-[#4B5563]">
              AH Denim is a premier denim manufacturer with over 20 years of
              expertise, exporting high-quality denim to the UK,Dubai and
              Europe. With two state-of-the-art manufacturing units and in-house
              washing and finishing facilities, we ensure precision, innovation,
              and sustainability. Specializing in woven garments for men, women,
              and kids, we produce 150,000 garments monthly. Our streamlined
              communication, in-house fabric availability, and certified trims
              guarantee efficiency and premium quality. With a low MOQ policy,
              we empower brands—emerging and established—to bring their vision
              to life with speed, reliability, and sustainability at the core.
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] lg:w-[50%] 2xl:w-auto">
          <motion.video
            src={OurWorkVideo}
            autoPlay
            loop
            muted
            className="w-full h-[70vh] object-cover rounded-lg"
          ></motion.video>
        </div>
      </div>
    </>
  );
};

export default OurWork;
