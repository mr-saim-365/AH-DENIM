import { useState } from "react";
import MensWear from "../../public/images/mens wear.jpeg";
import logo from "../../public/images/logo2.png";
import { FiSearch } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Men = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="mt-20 px-4 md:px-0 flex flex-col gap-10 mb-12 font-Lato">
          <div className="flex justify-between p-3 w-[90%] mx-auto">
            <div>
              <img
                className="h-[90px] w-[90px] filter invert"
                src={logo}
                alt="AH DENIM"
              />
            </div>

            <div className="flex items-center gap-5">
              <div>
                <FiSearch size={25} />
              </div>
              <div>
                <CiShoppingCart size={25} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 px-8">
            <div className="card max-w-[400px]">
              <div className="w-full h-[450px] rounded shadow-lg border border-gray-200 bg-white">
                <img
                  className="rounded-t w-full h-full object-cover"
                  src={MensWear}
                  alt=""
                />
              </div>

              <div className="p-5 text-center">
                <div className="mb-3 text-2xl">Men's Wear</div>
                <div className="p-[6px]  uppercase text-sm">
                  <button
                    className="p-2 rounded-lg bg-[#222222] text-[#ffffff]"
                    type="button"
                  >
                    View album
                  </button>
                </div>
              </div>
            </div>

            <div className="card max-w-[400px]">
              <div className="w-full h-[450px] rounded shadow-lg border border-gray-200 bg-white">
                <img
                  className="rounded-t w-full h-full object-cover"
                  src={MensWear}
                  alt=""
                />
              </div>

              <div className="p-5 text-center">
                <div className="mb-3 text-2xl">Men's Wear</div>
                <div className="p-[6px]  uppercase text-sm">
                  <button
                    className="p-2 rounded-lg bg-[#222222] text-[#ffffff]"
                    type="button"
                  >
                    View album
                  </button>
                </div>
              </div>
            </div>

            <div className="card max-w-[400px]">
              <div className="w-full h-[450px] rounded shadow-lg border border-gray-200 bg-white">
                <img
                  className="rounded-t w-full h-full object-cover"
                  src={MensWear}
                  alt=""
                />
              </div>

              <div className="p-5 text-center">
                <div className="mb-3 text-2xl">Men's Wear</div>
                <div className="p-[6px]  uppercase text-sm">
                  <button
                    className="p-2 rounded-lg bg-[#222222] text-[#ffffff]"
                    type="button"
                  >
                    View album
                  </button>
                </div>
              </div>
            </div>

            <div className="card max-w-[400px]">
              <div className="w-full h-[450px] rounded shadow-lg border border-gray-200 bg-white">
                <img
                  className="rounded-t w-full h-full object-cover"
                  src={MensWear}
                  alt=""
                />
              </div>

              <div className="p-5 text-center">
                <div className="mb-3 text-2xl">Men's Wear</div>
                <div className="p-[6px]  uppercase text-sm">
                  <button
                    className="p-2 rounded-lg bg-[#222222] text-[#ffffff]"
                    type="button"
                  >
                    View album
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Men;
