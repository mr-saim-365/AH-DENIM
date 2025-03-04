import { motion } from "framer-motion";
import OverviewImage from "/images/image6.jpeg";
import MensWear from "/images/image4.jpeg";

const Overview = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-10 2xl:gap-20 py-20 items-start px-3 md:px-5">
      <div className="md:w-[40%] lg:w-[30%] w-full ">
        <img
          src={OverviewImage}
          className=" w-full h-[60vh] rounded-lg object-contain md:object-fill"
          alt="OverviewImage"
        />
      </div>

      <div className="md:w-[60%] lg:w-[60%] mt-5">
        <motion.h2
          className="text-2xl sm:text-3xl 2xl:text-[40px] font-bold font-serif mb-10 text-[#4D4D4D]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevating Denim Craftsmanship
        </motion.h2>

        <motion.p
          className="max-w-3xl 2xl:max-w-4xl mb-8 text-[#4B5563] font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AH Denim is a leading name in sustainable and high-quality denim
          manufacturing. With over two decades of expertise, we take pride in
          crafting premium woven garments for men, women, and kids. Our
          commitment to excellence is reflected in our meticulous craftsmanship,
          cutting-edge production techniques, and dedication to sustainability.
        </motion.p>
        <motion.a
          href="#about"
          className="bg-[#222222] text-[#ffffff] md:px-6 py-3 px-4 font-semibold rounded-full transition w-[150px] "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Learn More
        </motion.a>
      </div>
      <div className="md:w-[40%] lg:w-[30%] w-full hidden lg:block h-full">
        <img
          src={MensWear}
          className=" w-full h-[60vh] rounded-lg object-contain md:object-fill"
          alt="MensWear"
        />
      </div>
    </section>
  );
};

export default Overview;
