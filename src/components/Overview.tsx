import { motion } from "framer-motion";

const Overview = () => {
  return (
    <section className="py-20 flex flex-col max-w-7xl mx-auto px-5">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-[#4D4D4D]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Elevating Denim Craftsmanship
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl max-w-3xl mb-8 text-[#4B5563]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AH Denim is a pioneer in sustainable and high-quality denim
        manufacturing. With over two decades of expertise, we specialize in
        crafting premium woven garments for men, women, and kids. Our
        state-of-the-art facilities, in-house fabric reserves, and sustainable
        practices ensure excellence with efficiency.
      </motion.p>

      <motion.a
        href="#about"
        className="bg-[#222222] text-[#ffffff] px-6 py-3 text-lg font-semibold rounded-full hover:bg-gray-200 transition w-[150px] text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Learn More
      </motion.a>
    </section>
  );
};

export default Overview;
