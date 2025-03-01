import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import AboutVideo from "/About Video.mp4";
import Client1 from "/images/clients/1.jpeg";
import Client2 from "/images/clients/2.jpeg";
import Client3 from "/images/clients/3.jpeg";
import Client4 from "/images/clients/4.jpeg";
import Client5 from "/images/clients/5.jpeg";
import Client6 from "/images/clients/6.jpeg";
import Client7 from "/images/clients/7.jpeg";

import ExpoImage1 from "/images/ExpoImage1.jpeg";
import ExpoImage2 from "/images/ExpoImage2.jpeg";
import ExpoImage3 from "/images/ExpoImage3.jpeg";

import Buyers from "/images/Buyers.jpeg";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7];

const images = [ExpoImage1, ExpoImage2, ExpoImage3];

const AboutUs = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="text-[15px] sm:text-[16px]">
        {/* Video Section */}
        <section className="relative mt-[4.2rem] flex items-center justify-center">
          {/* Video Background */}
          <video className="w-full h-[75vh]" controls>
            <source src={AboutVideo} type="video/mp4" />
          </video>
        </section>

        {/* About Section */}
        <section className="px-8 md:px-20 py-16">
          <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] font-bold font-Arabic mb-2 pb-4 text-[#4D4D4D]">
            About Us
          </h2>
          <p className="leading-relaxed">
            About AH Denim At AH Denim, we are more than just manufacturers—we
            are creators, innovators, and problem solvers in the world of denim
            and woven apparel. With over two decades of experience, we
            specialize in producing high-quality, fashion-forward garments that
            meet the evolving needs of global brands. Our Journey What started
            in 2000 as a passion for denim craftsmanship has grown into a
            state-of-the-art manufacturing facility, delivering trend-driven,
            sustainable apparel for men, women, and kids. With a strong
            reputation in the industry, we have proudly been exporting to the UK
            and Dubai for the last three years, helping brands bring their
            vision to life. What We Offer Expertise in Woven & Denim Apparel –
            From timeless classics to contemporary fashion pieces, we
            manufacture a diverse range of garments.Innovative Design &
            Finishing – Our advanced in-house washing and finishing facilities
            allow us to create unique textures, washes, and sustainable
            finishes.Sustainability at the Core – We embrace eco-conscious
            production, using water-saving technologies and responsible sourcing
            to reduce our environmental footprint. Flexible Solutions for Brands
            – Our low MOQ policy ensures that both emerging designers and
            established labels can access high-quality manufacturing without
            high-volume constraints. Why Choose AH Denim? At AH Denim, we don’t
            just follow trends—we set them. Our commitment to quality,
            innovation, and sustainability ensures that every piece we produce
            meets the highest industry standards. Whether you're a startup
            looking for a reliable partner or an established brand seeking a
            fresh manufacturing perspective, we are here to deliver exceptional
            results.
          </p>
        </section>

        {/* Expo Section */}
        <section className="px-8 md:px-20 pb-16">
          <div className="flex flex-col">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] font-bold mb-6 pb-2 text-[#4D4D4D]">
              Our Expo
            </h2>

            <div className="2xl:flex 2xl:flex-row flex flex-col gap-4">
              <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg ">
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0.6, x: "100%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <img
                    src={images[index]}
                    alt={`Expo Slide ${index + 1}`}
                    className="w-full h-[50vh] sm:h-[65vh] 2xl:h-[80vh] object-cover rounded-lg"
                  />
                </motion.div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Expo Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2 gap-6 2xl:w-[80%]">
                <div className="text-black p-6 rounded-lg shadow-lg border">
                  <h3 className="text-xl font-bold font-Arabic text-[#4D4D4D]">
                    Expo Exhibitions
                  </h3>
                  <p className="mt-2 text-justify ">
                    At AH Denim, we actively participate in global trade shows
                    to showcase our expertise in denim innovation and
                    sustainable apparel manufacturing. Recently, we exhibited at
                    Karachi TEXPO, one of Pakistan’s leading textile
                    exhibitions. The event brought together industry leaders,
                    buyers, and fashion brands from around the world to explore
                    our latest collections and innovations.
                  </p>
                </div>
                <div className="text-black p-6 rounded-lg shadow-lg border">
                  <h3 className="text-xl font-bold font-Arabic text-[#4D4D4D]">
                    Our Presence at Karachi TEXPO
                  </h3>
                  <p className="mt-2  text-justify ">
                    At TEXPO Karachi, our booth attracted visitors from various
                    countries, including top retailers, fashion designers, and
                    sourcing professionals. We presented a range of sustainable
                    denim solutions, highlighting eco-friendly washes and
                    production techniques. Our team also showcased diverse woven
                    garments for men, women, and kids, catering to different
                    market needs.
                  </p>
                </div>
                <div className="text-black p-6 rounded-lg shadow-lg border">
                  <h3 className="text-xl font-bold font-Arabic text-[#4D4D4D]">
                    Connecting with the Global Market
                  </h3>
                  <p className="mt-2  text-justify ">
                    We introduced customization and low MOQ solutions, allowing
                    buyers to order tailored styles with flexible quantities.
                    Additionally, our state-of-the-art laundry and finishing
                    techniques were a key highlight, demonstrating our advanced
                    washing capabilities. These innovations reinforced our
                    commitment to high-quality denim manufacturing while
                    prioritizing sustainability.
                  </p>
                </div>
                <div className="text-black p-6 rounded-lg shadow-lg border">
                  <h3 className="text-xl font-bold font-Arabic text-[#4D4D4D]">
                    Join Us at Future Exhibitions!
                  </h3>
                  <p className="mt-2  text-justify ">
                    Participating in Karachi TEXPO strengthened our presence in
                    the global denim industry and created opportunities for
                    valuable networking. Engaging with international buyers and
                    exploring new collaborations has been a key part of our
                    growth strategy. We remain dedicated to trendsetting and
                    fostering meaningful partnerships in the fashion sector.
                  </p>
                </div>

                <div className="text-black p-6 rounded-lg shadow-lg border">
                  <h3 className="text-xl font-bold font-Arabic text-[#4D4D4D]">
                    Future Showcases & Innovation
                  </h3>
                  <p className="mt-2  text-justify">
                    We look forward to unveiling more innovations at upcoming
                    trade shows and continuing to push the boundaries of denim
                    manufacturing. Stay tuned for updates on where you can visit
                    us next. Experience the future of denim with AH Denim as we
                    redefine sustainability, quality, and style!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 lg:px-24 py-16 flex flex-col gap-20 bg-gray-100">
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] font-bold font-Arabic text-center text-gray-800">
              Our Partners
            </h2>

            <div className="w-[80%] overflow-hidden relative py-8 bg-gray-50">
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <div className="flex w-max space-x-10">
                {/* First motion div */}
                <motion.div
                  className="flex space-x-10"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                >
                  {clients.map((client, index) => (
                    <img
                      key={`first-${index}`}
                      src={client}
                      alt={`Client ${index + 1}`}
                      className="w-24 sm:w-28 md:w-32 lg:w-36 rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                </motion.div>

                {/* Second motion div (identical images following the first) */}
                <motion.div
                  className="flex space-x-10"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                >
                  {clients.map((client, index) => (
                    <img
                      key={`second-${index}`}
                      src={client}
                      alt={`Client ${index + 1}`}
                      className="w-24 sm:w-28 md:w-32 lg:w-36 rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] font-bold font-Arabic text-center text-gray-800">
              Our Buyers
            </h2>
            <img src={Buyers} alt="Buyers" className="w-[80%] h-[18vh]" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
