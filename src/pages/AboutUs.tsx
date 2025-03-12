import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsEmojiSmile } from "react-icons/bs";
import AboutVideo from "/About Video.mp4";
import AboutImage1 from "/images/AboutImage1.jpeg";
import ExpoImage1 from "/images/ExpoImage1.jpeg";
import ExpoImage2 from "/images/ExpoImage2.jpeg";
import ExpoImage3 from "/images/ExpoImage3.jpeg";
import ExpoImage4 from "/images/ExpoImage4.jpeg";
import ExpoImage5 from "/images/ExpoImage5.jpeg";
import ExpoImage6 from "/images/ExpoImage6.jpeg";
import ExpoImage7 from "/images/ExpoImage7.jpeg";
import ExpoImage8 from "/images/ExpoImage8.jpeg";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const images = [
  ExpoImage1,
  ExpoImage2,
  ExpoImage3,
  ExpoImage4,
  ExpoImage5,
  ExpoImage6,
  ExpoImage7,
  ExpoImage8,
];

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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="text-[15px] sm:text-[16px]">
        {/* About Section */}
        <section
          id="about-us"
          className="px-3 md:px-6 lg:px-12 2xl:w-[80%] mt-24 mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-6 w-[90%] mx-auto ">
            {/* Image Section */}
            <div className="w-full  md:w-1/2 lg:w-1/2">
              <img
                src={AboutImage1}
                className="h-[60vh] w-full rounded-lg object-cover"
                alt="AboutUsImage1"
              />
            </div>
            <div className="w-full  ">
              <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px]  mt-5 font-bold font-serif mb-4 text-[#4D4D4D]">
                About Us
              </h2>
              <p className="leading-relaxed font-normal text-justify text-sm sm:text-base">
                Founded in 2000, AH Denim is a leading cut-to-pack manufacturer
                specializing in denim and woven garments for men, women, and
                kids. With two state-of-the-art units and a monthly capacity of
                150,000 garments, we offer end-to-end solutions from design to
                final packaging. Why Choose AH Denim? Complete In-House
                Production – Design, cutting, stitching, washing, finishing, and
                packaging for superior quality and faster turnaround.Advanced
                Facilities – Precision-crafted garments with modern technology
                and sustainable practices.Sustainability Focus – Eco-friendly
                washing techniques, minimal water usage, and ethical
                manufacturing.Compliance & Ethics – Safe working conditions,
                fair wages, and transparency. Flexible Production – Low MOQs for
                startups & large-scale manufacturing for global brands. Explore
                our factory video to witness our commitment to quality,
                sustainability, and innovation. Let AH Denim bring your vision
                to life with efficiency and craftsmanship.
              </p>
            </div>
          </div>
        </section>

        <section
          id="our-video"
          className="relative mt-[4.2rem] flex items-center justify-center"
        >
          <video className="w-full h-[75vh]" controls>
            <source src={AboutVideo} type="video/mp4" />
          </video>
        </section>

        <section
          ref={ref}
          id="overview"
          className="px-8 text-center py-16 my-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-20 text-[#4D4D4D] font-serif">
            OVERVIEW
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capacity */}
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl text-[#222222]">
                <BsEmojiSmile size={60} />
              </div>
              <h3 className="text-xl font-bold font-serif mt-4">Capacity</h3>
              <p className="mt-4">
                We currently have a capacity of{" "}
                <span>
                  {inView && <CountUp start={0} end={400000} duration={2.5} />}
                </span>{" "}
                garments per month which is increasing gradually
              </p>
            </div>

            {/* Workforce */}
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl text-[#222222]">
                <BsEmojiSmile size={60} />
              </div>
              <h3 className="text-xl font-bold font-serif mt-4">Workforce</h3>
              <p className=" mt-4">
                A team of{" "}
                <span>
                  {inView && <CountUp start={0} end={2000} duration={2.5} />}
                </span>{" "}
                hardworking members
              </p>
            </div>

            {/* Revenue */}
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl text-[#222222]">
                <BsEmojiSmile size={60} />
              </div>
              <h3 className="text-xl font-bold font-serif mt-4">Revenue</h3>
              <p className=" mt-4">
                We are at a revenue of USD{" "}
                <span>
                  {inView && <CountUp start={0} end={30} duration={2.5} />}
                </span>{" "}
                Million per year and continue to grow
              </p>
            </div>
          </div>
        </section>

        {/* Expo Section */}
        <section
          id="our-expo"
          className="px-3 md:px-6 lg:px-12 2xl:px-20 pb-16"
        >
          <div className="flex flex-col">
            <h2 className="text-[26px] sm:text-3xl text-center 2xl:text-[40px] font-bold font-serif mb-8 pb-2 text-[#4D4D4D]">
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
              <div className="grid grid-cols-1  text-[15px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2 gap-6 text-sm 2xl:w-[80%]">
                <div className="p-6 rounded-lg shadow-lg border bg-[#ffffff] ">
                  <h3 className="text-lg font-bold font-serif">
                    Expo Exhibitions
                  </h3>
                  <p className="mt-2  text-justify font-normal">
                    At AH Denim, we actively participate in global trade shows
                    to showcase our expertise in denim innovation and
                    sustainable apparel manufacturing. Recently, we exhibited at
                    Karachi TEXPO, one of Pakistan’s leading textile
                    exhibitions. The event brought together industry leaders,
                    buyers, and fashion brands from around the world to explore
                    our latest collections and innovations.
                  </p>
                </div>
                <div className="text-black p-6 rounded-lg shadow-lg border bg-[#ffffff]">
                  <h3 className="text-lg  font-semibold font-serif">
                    Our Presence at Karachi TEXPO
                  </h3>
                  <p className="mt-2  text-justify font-normal">
                    At TEXPO Karachi, our booth attracted visitors from various
                    countries, including top retailers, fashion designers, and
                    sourcing professionals. We presented a range of sustainable
                    denim solutions, highlighting eco-friendly washes and
                    production techniques. Our team also showcased diverse woven
                    garments for men, women, and kids, catering to different
                    market needs.
                  </p>
                </div>
                <div className="text-black p-6 rounded-lg shadow-lg border bg-[#ffffff]">
                  <div className="flex  gap-4 items-center">
                    <h3 className="text-lg font-semibold font-serif">
                      Connecting with the Global Market
                    </h3>
                  </div>
                  <p className="mt-2  text-justify font-normal ">
                    We introduced customization and low MOQ solutions, allowing
                    buyers to order tailored styles with flexible quantities.
                    Additionally, our state-of-the-art laundry and finishing
                    techniques were a key highlight, demonstrating our advanced
                    washing capabilities. These innovations reinforced our
                    commitment to high-quality denim manufacturing while
                    prioritizing sustainability.
                  </p>
                </div>
                <div className="text-black p-6 rounded-lg shadow-lg border bg-[#ffffff]">
                  <h3 className="text-lg font-semibold  font-serif">
                    Join Us at Future Exhibitions!
                  </h3>
                  <p className="mt-2  text-justify font-normal ">
                    Participating in Karachi TEXPO strengthened our presence in
                    the global denim industry and created opportunities for
                    valuable networking. Engaging with international buyers and
                    exploring new collaborations has been a key part of our
                    growth strategy. We remain dedicated to trendsetting and
                    fostering meaningful partnerships in the fashion sector.
                  </p>
                </div>

                <div className="text-black p-6 rounded-lg shadow-lg border bg-[#ffffff]">
                  <h3 className="text-lg font-semibold  font-serif">
                    Future Showcases & Innovation
                  </h3>
                  <p className="mt-2  text-justify font-normal ">
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
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
