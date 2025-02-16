import image1 from "../../public/images/VissionImage.jpeg";
import image2 from "../../public/images/MissionImage.jpeg";

const MissionandVission = () => {
  return (
    <>
      <section
        className="relative py-20 flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/denim-bg.jpg')" }}
      >
        <div className="flex flex-col gap-10 2xl:gap-10 font-poppins 2xl:w-[90%] mx-auto px-5">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#4D4D4D]">
              Vission & Mission
            </h1>
            <div className="my-4 text-gray-400 2xl:text-xl">
              <span>What we are doing,and why we are doing it.</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="flex flex-col gap-10 items-center ">
              <div>
                <img
                  className="rounded-[50%] h-[250px] w-[250px]  object-cover"
                  src={image1}
                  alt="MissionImage"
                />
              </div>
              <div className="lg:w-[90%] 2xl:w-[70%]">
                <h2 className="text-4xl md:text-5xl font-semibold text-[#4D4D4D] text-center">
                  Our Vission
                </h2>
                <p className="mt-6 text-justify text-lg text-[#4B5563]">
                  AH Denim envisions becoming a global leader in manufacturing
                  excellence, setting new standards in quality, efficiency, and
                  sustainability. Through innovation and ethical stewardship, we
                  drive transformative change—harmonizing fashion with
                  environmental responsibility. With precision, sustainability,
                  and cutting-edge craftsmanship, we are shaping a future where
                  denim is a symbol of progress and purpose.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 items-center">
              <div>
                <img
                  className="rounded-[50%] h-[250px] w-[250px] object-cover"
                  src={image2}
                  alt="VissionImage"
                />
              </div>
              <div className="lg:w-[90%]  2xl:w-[70%]">
                <h2 className="text-4xl md:text-5xl font-semibold text-[#4D4D4D] text-center">
                  Our Mission
                </h2>
                <p className="mt-6 text-justify text-lg text-[#4B5563]">
                  At AH Denim, we redefine denim with sustainability, ethical
                  integrity, and innovation. Using organic cotton and
                  eco-conscious materials, we minimize waste, reduce our carbon
                  footprint, and optimize water & energy efficiency. Our
                  commitment extends beyond production—ensuring responsible
                  fashion through fair labor and cutting-edge techniques. At AH
                  Denim, we don’t just create denim; we craft a future where
                  style meets sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionandVission;
