import { motion } from "framer-motion";
import OverviewImage from "/images/OverviewImage.jpeg";

const Overview = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 md:gap-5 py-20 items-center px-5">
      <div className="md:w-[60%] md:h-[30vh] lg:w-[70%]">
        <motion.h2
          className="text-2xl sm:text-3xl 2xl:text-[40px] font-bold mb-10 text-[#4D4D4D]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevating Denim Craftsmanship
        </motion.h2>

        <motion.p
          className="font-OpenSans max-w-3xl 2xl:max-w-4xl mb-8 text-[#4B5563]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AH Denim is sustainable and high-quality denim manufacturing. With
          over two decades of expertise, we specialize in crafting premium woven
          garments for men, women, and kids. Our state-of-the-art facilities,
          in-house fabric reserves, and sustainable practices ensure excellence
          with efficiency.
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

      <div className="md:w-[40%] lg:w-[30%]">
        <img
          src={OverviewImage}
          className="h-[70vh] w-full object-cover rounded-lg"
          alt="OverviewImage"
        />
      </div>
    </section>
  );
};

export default Overview;
