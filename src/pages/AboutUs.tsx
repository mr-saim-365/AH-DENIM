import { FaPlay } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <div className="flex flex-wrap gap-6 justify-center">
          <img src="/assets/partner1.png" alt="Partner 1" className="w-32" />
          <img src="/assets/partner2.png" alt="Partner 2" className="w-32" />
          <img src="/assets/partner3.png" alt="Partner 3" className="w-32" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
