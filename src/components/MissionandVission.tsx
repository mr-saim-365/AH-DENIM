const MissionandVission = () => {
  return (
    <>
      <section
        className="relative py-20 flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/denim-bg.jpg')" }}
      >
        <div className="flex flex-col gap-10 2xl:gap-10 font-poppins 2xl:w-[70%] mx-auto px-5">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#4D4D4D]">
              Vission & Mission
            </h1>
            <div className="my-4 text-gray-400 2xl:text-xl">
              <span>What we are doing,and why we are doing it.</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#4D4D4D] ">
                Our Vission
              </h2>
              <p className="mt-6 text-lg text-[#4B5563]">
                AH Denim envisions becoming a global leader in manufacturing
                excellence, setting new standards in quality, efficiency, and
                sustainability. Through innovation and ethical stewardship, we
                drive transformative change—harmonizing fashion with
                environmental responsibility. With precision, sustainability,
                and cutting-edge craftsmanship, we are shaping a future where
                denim is a symbol of progress and purpose.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#4D4D4D]">
                Our Mission
              </h2>
              <p className="mt-6 text-lg text-[#4B5563]">
                At AH Denim, we redefine denim with sustainability, ethical
                integrity, and innovation. Using organic cotton and
                eco-conscious materials, we minimize waste, reduce our carbon
                footprint, and optimize water & energy efficiency. Our
                commitment extends beyond production—ensuring responsible
                fashion through fair labor and cutting-edge techniques. At AH
                Denim, we don’t just create denim; we craft a future where style
                meets sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionandVission;
