import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { slides } from "../slides";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Men = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter images based on search term
  const filteredImages = slides.filter((image) =>
    image.disc?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="mt-[10rem]">
          <div className="mensWear flex flex-col my-10 gap-10 z-50 px-12 md:px-20 w-full mx-auto">
            <div className="flex flex-col gap-10 items-start md:flex-row md:justify-between md:items-center">
              <div>
                <ul className="flex gap-5 text-[#000000] text-lg uppercase font-poppins cursor-pointer">
                  <li>
                    <button className="uppercase">Man</button>
                  </li>
                  <li>
                    <button className="uppercase">Woman</button>
                  </li>
                  <li>
                    <button className="uppercase">Kids</button>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center relative">
                  <input
                    type="text"
                    className="border-b border-gray-400 p-2 text-[18px] text-[#000000] outline-none"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FiSearch
                    size={20}
                    className="cursor-pointer absolute right-[0px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:px-0 flex flex-col gap-10 mb-12 font-Lato">
            <h2 className="text-[#000000] px-8 my-7 uppercase font-poppins text-[20px] font-semibold">
              <span>You are interested in</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-12">
              {slides.map((product, index) => {
                const [currentIndex, setCurrentIndex] = useState(0);

                const nextImage = () => {
                  setCurrentIndex((prev) => (prev + 1) % product.src.length);
                };

                const prevImage = () => {
                  setCurrentIndex((prev) =>
                    prev === 0 ? product.src.length - 1 : prev - 1
                  );
                };

                return (
                  <div
                    key={index}
                    className="card relative group cursor-pointer"
                  >
                    <div className="h-[50vh] shadow-lg border border-gray-200 bg-white relative overflow-hidden">
                      {/* 🟢 Hover Effect */}
                      <Link
                        to={{
                          pathname: "/ProductPage",
                          search: `?id=${product.id}`,
                        }}
                        state={product}
                      >
                        <img
                          className="w-full h-full object-cover transition-all duration-300"
                          src={product.src[currentIndex]}
                          alt={`Product ${index + 1}`}
                          onMouseEnter={() => setCurrentIndex(1)}
                          onMouseLeave={() => setCurrentIndex(0)}
                        />
                      </Link>
                      {/* 🟢 Left Arrow */}
                      <button
                        className="absolute top-1/2 left-2 bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                      >
                        <MdOutlineKeyboardArrowLeft size={25} />
                      </button>
                      {/* 🟢 Right Arrow */}
                      <button
                        className="absolute top-1/2 right-2 bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                      >
                        <MdOutlineKeyboardArrowRight size={25} />
                      </button>
                    </div>
                    <div className="p-5 text-center">
                      <div className="mb-3 text-2xl">{product.disc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Men;
