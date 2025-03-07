import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import AboutVideo from "/About Video.mp4";
import CarouselImage1 from "/images/CarouselImage1.jpeg";
import CarouselImage2 from "/images/CarouselImage2.jpeg";
import CarouselImage3 from "/images/CarouselImage3.jpeg";
import CarouselImage4 from "/images/CarouselImage4.jpeg";
import CarouselImage5 from "/images/CarouselImage5.jpeg";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="text-[15px] sm:text-[16px]">
        <section className="relative mt-[4.2rem] flex items-center justify-center">
          <video className="w-full h-[75vh]" controls>
            <source src={AboutVideo} type="video/mp4" />
          </video>
        </section>

        {/* About Section */}
        <section className="px-3 md:px-20 py-16">
          <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] text-center font-bold font-serif mb-5 pb-4 text-[#4D4D4D]">
            About Us
          </h2>
          <p className="leading-relaxed font-normal">
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
        <section className="px-3 md:px-20 pb-16">
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
                  <h3 className="text-lg font-bold text-center font-serif">
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
