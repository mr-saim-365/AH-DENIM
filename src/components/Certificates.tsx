import { motion } from "framer-motion";

const certificates = [
  "https://www.w3.org/WAI/WCAG2AA-Conformance.png",
  "https://www.bsigroup.com/medialibrary/Certs/ISO-9001-Certificate.png",
  "https://www.cdc.gov/diabetes/images/preventionprograms/sample-certificate.jpg",
  "https://www.trainingexpress.org.uk/wp-content/uploads/2019/09/sample-certificate.jpg",
  "https://www.haccpcanada.net/images/HACCP_Certificate.jpg",
  "https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100438_large.jpg",
];

const Certificates = () => {
  return (
    <div className="py-20 flex flex-col max-w-7xl mx-auto px-5">
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
          {[...certificates, ...certificates].map((cert, index) => (
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
