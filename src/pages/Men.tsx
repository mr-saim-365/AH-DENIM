import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lightbox } from "yet-another-react-lightbox";
import { slides } from "../slides";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";

const Men = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  // 🔍 Filter images based on search term
  const filteredImages = slides.filter((image) =>
    image.disc?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
                <div className="flex  items-center relative">
                  <input
                    type="text"
                    className="border-b border-gray-400 p-2 text-[18px] text-[#000000] outline-none relative "
                    placeholder="Seacrh"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FiSearch
                    size={20}
                    className="cursor-pointer absolute right-[0px] "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" md:px-0 flex flex-col gap-10 mb-12 font-Lato">
            <h2 className="text-[#000000] px-8 my-7 uppercase font-poppins text-[20px] font-semibold">
              <span>You are interested in</span>
            </h2>

            <Lightbox
              plugins={[Captions, Download, Fullscreen, Zoom]}
              captions={{
                showToggle: true,
                descriptionTextAlign: "end",
              }}
              close={() => setOpen(false)}
              slides={slides}
              open={open}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-3 px-4">
              {filteredImages.map((imgSrc, i) => (
                <div key={i} className="card ">
                  <div className="w-full h-[20vh] sm:h-[30vh] shadow-lg border border-gray-200 bg-white">
                    <img
                      onClick={() => setOpen(true)}
                      className="rounded-lg w-full h-full object-cover"
                      src={imgSrc.src}
                      alt={`Men's Wear ${i + 1}`}
                    />
                  </div>
                  <div className="p-5 text-center">
                    <div className="mb-3 text-2xl">{imgSrc.disc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Men;
