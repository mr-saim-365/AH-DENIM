import gif from "../../public/images/gifImage.gif";

const OurWork = () => {
  return (
    <>
      <div className="lg:flex lg:gap-[60px] lg:px-5 2xl:w-[70%] 2xl:mx-auto mt-10">
        <div className="text-[#4D4D4D] text-[15px] 2xl:text-[20px] px-5 py-10 lg:px-0 lg:w-[70%]">
          <div className="text-[18px] text-[#8E8E8E] 2xl:text-[22px]">
            The short sweet on us
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[45px] lg:text-[50px] 2xl:text-[60px]">
              Who we are
            </h2>
            <div>
              Born from a passion for denim, Moseley Road is a clothing
              manufacturer based in the UK, dedicated to serving creatives and
              boutique brands. With expertise in custom denim apparel, we offer
              low order quantities, making manufacturing accessible to emerging
              labels.
              <br />
              <br />
              Being the brain of{" "}
              <span className="text-[#222222] font-semibold">Chantuque</span>, a
              renowned denim manufacturer in the industry and having served the
              likes of Good American, Urban Outfitters and The Gap to name a
              few, reflects our commitment to quality and craftsmanship. Join us
              on the journey to bring unique visions to life through tailored
              denim production.
            </div>
          </div>
        </div>

        <div className="w-[30%] 2xl:w-auto">
          <img src={gif} alt="" className="h-[70vh] w-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default OurWork;
