import OurWorkImage from "/images/OurWorkImage.jpeg";

const OurWork = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-[60px] gap-10 md:px-5 px-3 2xl:mx-auto py-16 md:justify-between">
        {/* Text Section */}
        <div className="text-[#4D4D4D] flex flex-col md:w-[60%] md:h-[50vh] lg:px-0 lg:w-[70%]">
          <div className="flex flex-col gap-4 md:gap-5">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] text-center font-bold font-serif text-[#4D4D4D]">
              Who are we
            </h2>

            <p className="leading-relaxed font-normal text-justify text-sm md:text-[15px]">
              At AH Denim, we are leaders in crafting premium denim and woven
              apparel, known for our innovation, quality, and sustainable
              practices. For over 20 years, we have been delivering
              fashion-forward garments to top global brands—earning a reputation
              as a trusted manufacturing partner. We are proud to be a top
              supplier for Boohoo, consistently providing on-trend, high-quality
              apparel that meets their fast-paced and ever-evolving demands. Our
              collaboration with Boohoo reflects our ability to deliver
              flexibility, speed, and precision without compromising on style or
              sustainability.With expertise across men’s, women’s, and kids’
              apparel, we offer low MOQs to support emerging brands while
              maintaining the capacity to serve industry giants. At AH Denim, we
              don’t just manufacture garments—we bring your vision to life with
              care, craftsmanship, and innovation. Let’s create something
              extraordinary together.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/5 lg:w-1/3">
          <img
            src={OurWorkImage}
            className="w-full h-auto max-h-[70vh] rounded-lg object-cover"
            alt="Our Work"
          />
        </div>
      </div>
    </>
  );
};

export default OurWork;
