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

  const product = location.state; // ✅ Get product from state
  if (!product)
    return <div className="text-center mt-10 text-2xl">Product not found</div>;

  const images: string[] = product.src || []; // ✅ Get images from product

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div>
        <Navbar />

        <div className="min-h-screen my-[5rem] ">
          {/* 🔙 Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="text-lg px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300 m-10"
          >
            ← Go Back
          </button>

          <Lightbox
            plugins={[Captions, Download, Fullscreen, Zoom]}
            captions={{ showToggle: true, descriptionTextAlign: "end" }}
            close={() => setOpen(false)}
            slides={images.map((img) => ({ src: img }))}
            open={open}
          />

          {/* 🖼️ Image Grid */}
          <div className="hidden md:flex gap-10 md:px-5 lg:p-12 2xl:p-16">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {images.map((img: string, idx: number) => (
                <img
                  onClick={() => setOpen(true)}
                  key={idx}
                  src={img}
                  alt={`Product Image ${idx}`}
                  className="md:w-[200px] md:h-[270px] lg:w-[285px] lg:h-[420px] 2xl:w-[410px] 2xl:h-[600px] object-cover shadow-md"
                />
              ))}
            </div>
            <h2 className="text-3xl font-semibold mb-5">{product.disc}</h2>
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
            <h2 className="mt-5 text-3xl font-semibold">{product.disc}</h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
