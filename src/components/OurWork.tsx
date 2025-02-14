import gif from "../../public/images/gifImage.gif";

const OurWork = () => {
  return (
    <>
      <div className=" md:flex md:gap-[60px] font-poppins md:px-5 2xl:mx-auto 2xl:w-[70%] my-10">
        <div className="text-[#4D4D4D] text-[15px] 2xl:text-[20px] px-5 py-10 md:w-[60%] lg:px-0 lg:w-[70%]">
          <div className="text-[18px] text-[#8E8E8E] 2xl:text-[22px]">
            The short sweet on us
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[45px] lg:text-[50px] font-bold 2xl:text-[60px] text-[#4D4D4D]">
              Who we are
            </h2>
            <div className="text-[#4B5563]">
              AH Denim is a premier denim manufacturer with over 20 years of
              expertise, exporting high-quality denim to the UK and Dubai. With
              two state-of-the-art manufacturing units and in-house washing and
              finishing facilities, we ensure precision, innovation, and
              sustainability. Specializing in woven garments for men, women, and
              kids, we produce 150,000 garments monthly. Our streamlined
              communication, in-house fabric availability, and certified trims
              guarantee efficiency and premium quality. With a low MOQ policy,
              we empower brands—emerging and established—to bring their vision
              to life with speed, reliability, and sustainability at the core.
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] lg:w-[50%] 2xl:w-auto">
          <img src={gif} alt="" className="h-[70vh] w-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default OurWork;
