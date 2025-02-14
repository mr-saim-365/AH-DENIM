import { motion } from "framer-motion";
import Certificate1 from "../../public/images/Certificate1.jpg";
import Certificate2 from "../../public/images/Certificate2.jpg";

const certificates = [
  Certificate1,
  Certificate2,
  Certificate1,
  Certificate2,
  Certificate1,
  Certificate2,
];

const Certificates = () => {
  return (
    <div className="py-20 flex flex-col 2xl:w-[70%] mx-auto px-5">
      <h2 className="text-4xl md:text-5xl font-bold my-6 text-[#4D4D4D]">
        Our Certifications
      </h2>
      <div className="relative w-full overflow-hidden py-10">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...certificates].map((cert, index) => (
            <img
              key={index}
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="w-40 h-auto object-contain mx-4"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
