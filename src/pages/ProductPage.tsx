import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Zoom,
} from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../components/Footer";

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const product = location.state;
  const category = location.state?.category || "Man";

  if (!product)
    return <div className="text-center mt-10 text-2xl">Product not found</div>;

  const images: string[] = product.src || [];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div>
        <Navbar />

        <div className="min-h-screen mt-[5rem]">
          {/* 🔙 Back Button */}
          <button
            onClick={() => navigate(`/items?category=${category}`)}
            className="text-base p-2  md:text-lg  bg-gray-200 rounded-lg shadow hover:bg-gray-300 my-10 mx-4 2xl:mx-16"
          >
            ← Go Back
          </button>

          <Lightbox
            plugins={[Captions, Download, Fullscreen, Zoom]}
            captions={{ showToggle: true, descriptionTextAlign: "end" }}
            close={() => setOpen(false)}
            slides={images.map((img) => ({ src: img }))}
            open={open}
            index={currentIndex}
          />

          {/* 🖼️ Image Grid */}
          <div className="hidden md:flex gap-20 md:px-5 lg:p-12 2xl:p-16 pb-10">
            <div
              className={`grid md:w-[55%] 2xl:w-[45%] ${
                images.length > 1 ? "grid-cols-2" : "grid-cols-1"
              } gap-8`}
            >
              {images.map((img: string, idx: number) => (
                <img
                  onClick={() => openLightbox(idx)}
                  key={idx}
                  src={img}
                  alt={`Product Image ${idx}`}
                  className="md:w-[250px] md:h-[300px] lg:w-[285px] lg:h-[420px] 2xl:w-[410px] 2xl:h-[600px] object-cover shadow-md"
                />
              ))}
            </div>
            <div className="flex flex-col gap-5 md:text-[15px] 2xl:text-[17px] md:w-[45%] 2xl:w-[55%] mt-5">
              <h2 className="font-bold md:text-[18px] 2xl:text-2xl font-serif uppercase mb-5">
                {product.title}
              </h2>

              <div className="uppercase">
                <span className="font-bold font-serif">Fit & Style: </span>
                {product.fit}
              </div>
              <div>
                <p
                  className="font-normal mb-5
                "
                >
                  {product.disc}
                </p>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <h5 className="uppercase tracking-[2px] font-serif">Size</h5>
                <div></div>
                <ul className="flex gap-2 font-serif">
                  <li>
                    <a
                      className="border-2 border-[#111] text-[#111] w-8 h-8 text-center px-3 py-1 hover:bg-[#111] hover:text-[#ffffff] hover:transition-all hover:delay-100"
                      href="#"
                    >
                      S
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-2 border-[#111] text-[#111] w-8 h-8 text-center  px-3 py-1 hover:bg-[#111] hover:text-[#ffffff] hover:transition-all hover:delay-100"
                      href="#"
                    >
                      M
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-2 border-[#111] text-[#111] w-8 h-8 text-center  px-3 py-1 hover:bg-[#111] hover:text-[#ffffff] hover:transition-all hover:delay-100"
                      href="#"
                    >
                      L
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-2 border-[#111] text-[#111] w-8 h-8 text-center  px-3 py-1 hover:bg-[#111] hover:text-[#ffffff] hover:transition-all hover:delay-100"
                      href="#"
                    >
                      XL
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h5 className="text-lg uppercase tracking-[2px] font-serif">
                  Color
                </h5>
                <div>All washes available.</div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex flex-col items-center gap-4 px-3 sm:px-4">
            {/* 🖼️ Image Carousel */}
            <div className="relative w-full h-[500px] sm:h-[600px]">
              <img
                src={images[currentIndex]}
                alt="Product"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            {/* 🖼️ Thumbnails for Mobile */}
            <div className="flex gap-3 mt-5">
              {images.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className={`w-20 h-20 object-cover cursor-pointer ${
                    idx === currentIndex
                      ? "border-2 border-black scale-105"
                      : ""
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
            <div className="flex flex-col gap-5 text-[15px]  mt-5 mb-10">
              <h2 className="font-bold font-serif text-[16px] sm:text-[18px] text-center ">
                {product.title}
              </h2>

              <div className="uppercase ">
                <span className="font-bold font-serif ">Fit & Style: </span>
                {product.fit}
              </div>
              <div>
                <p
                  className="font-normal mb-5
                "
                >
                  {product.disc}
                </p>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <h5 className="text-lg uppercase tracking-[2px] font-serif">
                  Size
                </h5>
                <div></div>
                <ul className="flex gap-2 font-serif">
                  <li>
                    <a
                      className="border-2 border-[#111] text-[#111] w-8 h-8 text-center px-3 py-1 hover:bg-[#111] hover:text-[#ffffff] hover:transition-all hover:delay-100"
                      href="#"
                    >
                      S
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-2 border-[#111] text-[#111] w-8 h-8 text-center  px-3 py-1 hover:bg-[#111] hover:text-[#ffffff] hover:transition-all hover:delay-100"
                      href="#"
                    >
                      M
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-2 border-[#111] text-[#111] w-8 h-8 text-center  px-3 py-1 hover:bg-[#111] hover:text-[#ffffff] hover:transition-all hover:delay-100"
                      href="#"
                    >
                      L
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-2 border-[#111] text-[#111] w-8 h-8 text-center  px-3 py-1 hover:bg-[#111] hover:text-[#ffffff] hover:transition-all hover:delay-100"
                      href="#"
                    >
                      XL
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h5 className="text-lg uppercase tracking-[2px] font-serif">
                  Color
                </h5>
                <div>All washes available.</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
