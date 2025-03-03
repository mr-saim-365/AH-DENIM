import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-[15px] sm:text-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-3 md:place-items-center gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">AH DENIM</h3>
            <p className="text-gray-400 font-normal">
              Premium denim products crafted with excellence. Discover our
              collection of high-quality denim wear for all ages.
            </p>
          </div>

          <div>
            <h4 className="font-bold font-serif mb-4">Categories</h4>
            <ul className="space-y-2 font-normal">
              <li>
                <Link
                  to="/Items?category=Man"
                  className="text-gray-400 hover:text-white"
                >
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/Items?category=Woman"
                  className="text-gray-400 hover:text-white"
                >
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/Items?category=Kids"
                  className="text-gray-400 hover:text-white"
                >
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-serif mb-4">Customer Service</h4>
            <ul className="space-y-2 font-normal">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 font-normal">
            © 2024 AH Denim. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="#"
              className="text-gray-400 hover:text-blue-700 hover:border-white/60"
            >
              <GrFacebookOption size={22} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white/100  hover:border-white/60"
            >
              <FaXTwitter size={22} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-pink-500 hover:border-white/60"
            >
              <BsInstagram size={22} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-red-600  hover:border-white/60"
            >
              <FaYoutube size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
