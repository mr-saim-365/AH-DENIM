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
              className={`grid w-auto ${
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
              <h2 className=" md:text-[18px] 2xl:text-2xl font-sans font-medium tracking-[3px] uppercase mb-5">
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

              <div className="flex flex-col items-start gap-4">
                <span className="text-center text-lg font-serif uppercase">
                  Size
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex h-[50px] w-[50px] items-center justify-center">
                    <div className="text-2xl font-bold text-black z-50">S</div>
                    <div className="absolute h-full w-full rounded-full bg-blue-100 p-4 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
                    <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-blue-200 duration-500 peer-checked:scale-[500%]"></div>
                  </div>
                  <div className="relative flex h-[50px] w-[50px] items-center justify-center">
                    <input
                      type="radio"
                      id="radio"
                      name="gender"
                      value="female"
                      className="peer z-10 h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="absolute h-full w-full rounded-full bg-pink-100 p-2 shadow-sm shadow-[#00000050] ring-pink-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
                    <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-pink-200 duration-500 peer-checked:scale-[500%]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35px"
                      height="35px"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute fill-pink-400"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 9C20 13.0803 16.9453 16.4471 12.9981 16.9383C12.9994 16.9587 13 16.9793 13 17V19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11V17C11 16.9793 11.0006 16.9587 11.0019 16.9383C7.05466 16.4471 4 13.0803 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.00365 9C6.00365 12.3117 8.68831 14.9963 12 14.9963C15.3117 14.9963 17.9963 12.3117 17.9963 9C17.9963 5.68831 15.3117 3.00365 12 3.00365C8.68831 3.00365 6.00365 5.68831 6.00365 9Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative flex h-[50px] w-[50px] items-center justify-center">
                    <input
                      type="radio"
                      name="gender"
                      value="none-binary"
                      className="peer z-10 h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="absolute h-full w-full rounded-full bg-purple-100 p-2 shadow-sm shadow-[#00000050] ring-purple-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
                    <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-purple-200 duration-500 peer-checked:scale-[500%]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40px"
                      height="40px"
                      viewBox="0 0 512 512"
                      version="1.1"
                      className="absolute fill-purple-400"
                    >
                      <g id="drop" transform="translate(42.666667, 70.248389)">
                        <path d="M226.597,200.834611 L296.853333,271.084945 L353.819,271.084 L326.248389,243.503223 L356.418278,213.333333 L435.503223,292.418278 L356.418278,371.503223 L326.248389,341.333333 L353.82,313.751 L279.163435,313.751611 L196.418,231.011611 L226.597,200.834611 Z M356.418278,1.42108547e-14 L435.503223,79.0849447 L356.418278,158.169889 L326.248389,128 L353.82,100.418 L296.853333,100.418278 L83.503232,313.751611 L-1.0658141e-13,313.751611 L-1.03968831e-13,271.084945 L65.8133333,271.084945 L279.163435,57.7516113 L353.82,57.751 L326.248389,30.1698893 L356.418278,1.42108547e-14 Z M83.503232,57.7516113 L166.248,140.490611 L136.069,170.667611 L65.8133333,100.418278 L-1.0658141e-13,100.418278 L-1.0658141e-13,57.7516113 L83.503232,57.7516113 Z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="relative flex h-[50px] w-[50px] items-center justify-center">
                    <input
                      type="radio"
                      name="gender"
                      value="none"
                      className="peer z-10 h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="absolute h-full w-full rounded-full bg-neutral-100 p-2 shadow-sm shadow-[#00000050] ring-neutral-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
                    <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-neutral-200 duration-500 peer-checked:scale-[500%]"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50px"
                      height="50px"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute stroke-neutral-400"
                    >
                      <path
                        id="Vector"
                        d="M8.19531 8.76498C8.42304 8.06326 8.84053 7.43829 9.40137 6.95899C9.96221 6.47968 10.6444 6.16501 11.373 6.0494C12.1017 5.9338 12.8486 6.02202 13.5303 6.3042C14.2119 6.58637 14.8016 7.05166 15.2354 7.64844C15.6691 8.24521 15.9295 8.95008 15.9875 9.68554C16.0455 10.421 15.8985 11.1581 15.5636 11.8154C15.2287 12.4728 14.7192 13.0251 14.0901 13.4106C13.4611 13.7961 12.7377 14.0002 12 14.0002V14.9998M12.0498 19V19.1L11.9502 19.1002V19H12.0498Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
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
