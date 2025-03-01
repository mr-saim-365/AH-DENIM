import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-[15px] sm:text-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-3 md:place-items-center gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-Arabic mb-4">AH DENIM</h3>
            <p className="text-gray-400">
              Premium denim products crafted with excellence. Discover our
              collection of high-quality denim wear for all ages.
            </p>
          </div>

          <div>
            <h4 className="font-bold font-Arabic mb-4">Categories</h4>
            <ul className="space-y-2">
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
            <h4 className="font-bold font-Arabic mb-4">Customer Service</h4>
            <ul className="space-y-2">
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
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 AH Denim. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
