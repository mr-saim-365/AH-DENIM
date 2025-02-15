import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Client1 from "../../public/images/clients/1.jpeg";
import Client2 from "../../public/images/clients/2.jpeg";
import Client3 from "../../public/images/clients/3.jpeg";
import Client4 from "../../public/images/clients/4.jpeg";
import Client5 from "../../public/images/clients/5.jpeg";
import Client6 from "../../public/images/clients/6.jpeg";
import Client7 from "../../public/images/clients/7.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7];

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Video Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/ah-denim.mp4"
        ></video>
        <button className="relative z-10 text-black px-6 py-3 flex items-center gap-2 font-semibold uppercase rounded-full shadow-md">
          <FaPlay /> Watch Our Story
        </button>
      </section>

      {/* History Section */}
      <section className="px-8 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-6 pb-4 text-[#4D4D4D]">
          Our History
        </h2>
        <p className="leading-relaxed">
          Founded with a vision to redefine denim craftsmanship, AH Denim has
          pioneered sustainable and innovative fashion solutions. Our journey is
          rooted in a commitment to quality, integrity, and a relentless pursuit
          of excellence.
        </p>
      </section>

      {/* Expo Section */}
      <section className="px-8 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-6 pb-2 text-[#4D4D4D]">
          Our Expo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#4D4D4D]">
              Global Presence
            </h3>
            <p className="mt-2">
              Participating in international expos, AH Denim showcases its
              craftsmanship to the world.
            </p>
          </div>
          <div className="text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#4D4D4D]">
              Sustainable Innovations
            </h3>
            <p className="mt-2">
              Leading in eco-friendly solutions, we revolutionize denim
              production.
            </p>
          </div>
          <div className="text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#4D4D4D]">
              Future-Forward Vision
            </h3>
            <p className="mt-2">
              With cutting-edge technology, we drive fashion into a sustainable
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-8 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-6 pb-2 text-[#4D4D4D]">
          Our Partners
        </h2>
        <div className="flex flex-wrap gap-6">
          <motion.div
            className="flex space-x-10"
            animate={{ x: ["40%", "-120%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clients].map((client, index) => (
              <img
                key={index}
                src={client}
                alt={`Clients ${index + 1}`}
                className="w-36"
              />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
