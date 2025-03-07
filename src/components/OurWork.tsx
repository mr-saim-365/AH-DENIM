import OurWorkImage from "/images/OurWorkImage.jpeg";

const OurWork = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-[60px] gap-10 md:px-5 px-3 2xl:mx-auto py-16 md:justify-between">
        <div className="text-[#4D4D4D] flex flex-col  md:w-[60%] md:h-[50vh] lg:px-0 lg:w-[70%]">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] text-center font-bold font-serif text-[#4D4D4D]">
              Who are we
            </h2>
            <div className="text-[#4B5563] font-normal">
              AH Denim is a premier denim manufacturer with over 20 years of
              expertise, exporting high-quality denim to the UK,Dubai and
              Europe. With two state-of-the-art manufacturing units and in-house
              washing and finishing facilities, we ensure precision, innovation,
              and sustainability. Specializing in woven garments for men, women,
              and kids, we produce 150,000 garments monthly. Our streamlined
              communication, in-house fabric availability, and certified trims
              guarantee efficiency and premium quality. With a low MOQ policy,
              we empower brands—emerging and established—to bring their vision
              to life with speed, reliability, and sustainability at the core.
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] lg:w-[50%] 2xl:w-auto">
          <img src={OurWorkImage} className="w-full h-[70vh] rounded-lg"></img>
        </div>
      </div>
    </>
  );
};

export default OurWork;
