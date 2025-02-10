import image4 from "../../public/images/image4.jpeg";
import image6 from "../../public/images/image6.jpeg";
import image2 from "../../public/images/image2.jpeg";
import image5 from "../../public/images/image5.jpeg";
import image7 from "../../public/images/image7.jpeg";

const categories = {
  UK: {
    title: "UK",
    image: image4,
  },
  US: {
    title: "US",
    image: image6,
    country: ["Jeans", "Denim Dresses", "Skirts", "Jackets", "Jumpsuits"],
  },

  UAE: {
    title: "UAE",
    image: image2,
  },

  Canada: {
    title: "Canada",
    image: image5,
  },

  China: {
    title: "Europe",
    image: image7,
  },
};

const Categories = () => {
  return (
    <section className="py-16 px-0 sm:px-4 font-poppins w-[90%] mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Collections (Region Based)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-3 ">
          {Object.values(categories).map((category) => (
            <div key={category.title} className="group flex justify-center">
              <div className="relative overflow-hidden w-[85%] sm:w-full md:w-full rounded-lg mb-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-[40vh] md:h-[40vh] 2xl:h-[50vh] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center h-full p-8">
                  <h3 className="text-white text-3xl font-bold mb-4">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
