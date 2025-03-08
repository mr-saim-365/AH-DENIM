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
              <span className="block mb-3">
                <strong>About AH Denim:</strong> AH Denim is a premier denim
                manufacturer with over 20 years of expertise, exporting
                high-quality denim to the UK, Dubai, and Europe. With two
                state-of-the-art manufacturing units and in-house washing and
                finishing facilities, we ensure precision, innovation, and
                sustainability.
              </span>
              <span className="block mb-3">
                <strong>Our Manufacturing Strength:</strong> Specializing in
                woven garments for men, women, and kids, we produce 150,000
                garments monthly, maintaining high standards of craftsmanship
                and efficiency.
              </span>
              <span className="block mb-3">
                <strong>What We Offer:</strong>
              </span>
              <ul className="list-disc list-inside mb-3 space-y-2">
                <li>
                  <strong>Streamlined Communication:</strong> Our efficient
                  workflow ensures seamless coordination between production
                  teams and clients.
                </li>
                <li className="hidden 2xl:block">
                  <strong>In-House Fabric & Trims:</strong> We source and manage
                  fabric availability and certified trims internally, ensuring
                  consistency and premium quality.
                </li>
                <li className="hidden 2xl:block">
                  <strong>Precision & Innovation:</strong> Our advanced washing
                  and finishing facilities allow us to create high-end,
                  sustainable denim products.
                </li>
                <li className="hidden 2xl:block">
                  <strong>Low MOQ Policy:</strong> We enable both emerging and
                  established brands to bring their vision to life without
                  high-volume constraints.
                </li>
              </ul>
              <span className="hidden 2xl:block">
                <strong>Why Choose AH Denim?</strong> With speed, reliability,
                and sustainability at the core of our operations, we provide
                brands with a trusted manufacturing solution that aligns with
                industry-leading standards.
              </span>
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
