import Certificate1 from "/images/Certificate1.jpg";
import Certificate2 from "/images/Certificate2.jpg";

const certificates = [
  Certificate1,
  Certificate2,
  Certificate1,
  Certificate2,
  Certificate1,
  Certificate2,
];

const Certificates = () => {
  return (
    <div className="py-20 flex flex-col px-5">
      <h2 className="text-4xl md:text-5xl font-bold my-6 text-[#4D4D4D]">
        Our Certifications
      </h2>
      <div className="relative grid grid-col-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-6  gap-5  place-items-center overflow-hidden py-10">
        {[...certificates].map((cert, index) => (
          <img
            key={index}
            src={cert}
            alt={`Certificate ${index + 1}`}
            className="w-40 h-auto object-contain mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
