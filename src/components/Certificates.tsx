import Certificate1 from "/images/Sedex.png";
import Certificate2 from "/images/amforiBsciLogo.jpg";
import Certificate3 from "/images/QesiLogo.png";

const certificates = [Certificate1, Certificate2, Certificate3];

const Certificates = () => {
  return (
    <div className="py-20 flex flex-col px-5 md:px-5">
      <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] font-bold font-serif my-6 text-[#4D4D4D]">
        Our Certifications
      </h2>
      <div className="relative grid grid-col-1 sm:grid-cols-3 sm:w-[80%] 2xl:w-[50%] mx-auto w-full gap-10 sm:gap-0  place-items-center overflow-hidden py-10">
        {[...certificates].map((cert, index) => (
          <img
            key={index}
            src={cert}
            alt={`Certificate ${index + 1}`}
            className="w-[180px] h-[160px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
