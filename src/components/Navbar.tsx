import { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { X } from "lucide-react";
import logo from "/images/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNestedClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setScrollPos(window.scrollY);
    setOpen(!open);
  };

  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, [open]);

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md z-50 shadow-lg ${
        isScrolled ? "bg-[#ffffff]" : "bg-[#222222]"
      }`}
    >
      <div className="px-4 sm:px-6 h-18 lg:px-8">
        <div className="flex items-center">
          <div className="flex justify-between md:justify-normal w-full md:w-auto items-center">
            <button
              className={`md:hidden -ml-2 p-2 flex order-2 ${
                isScrolled ? "text-[#222222]" : "text-[#ffffff]"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <IoMenuOutline size={25} />}
            </button>
            <div>
              <img
                className={`w-[70px] h-[70px] ${
                  isScrolled ? "filter invert" : "bg-transparent"
                }`}
                src={logo}
                alt="Logo"
              />
            </div>
          </div>

          <div
            className={`hidden md:flex md:w-full md:justify-center space-x-9 lg:space-x-12 2xl:space-x-20 ${
              isScrolled ? "md:text-[#222222]" : "md:text-[#ffffff]"
            }`}
          >
            <Link to="/">Home</Link>
            <div className="relative flex items-center gap-1 group">
              <span>Catalog</span>
              <RiArrowDownSLine size={16} className="mt-1" />
              <div className="bg-[#ffffff] text-[#222222] py-4 px-2 w-[150px] rounded-lg shadow-lg flex flex-col items-center gap-3 absolute top-[3rem] left-[-45px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link className="hover:scale-110" to="/Items?category=Man">
                  Men
                </Link>
                <Link className="hover:scale-110 " to="/Items?category=Woman">
                  Women
                </Link>
                <Link className="hover:scale-110" to="/Items?category=Kids">
                  Kid
                </Link>
              </div>
            </div>
            <Link to="/AboutUS">About Us</Link>
            <Link to="/ContactUS">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 visible transition-all duration-300 ease-in"
            : "max-h-0 opacity-0 invisible transition-all duration-300 ease-out"
        } ${isScrolled ? "text-[#222222]" : "text-[#ffffff]"}`}
      >
        <div className="px-2 pt-4 pb-4">
          <Link to="/" className="block p-4">
            Home
          </Link>

          <div className="relative w-[92%]">
            <button
              onClick={handleNestedClick}
              className="flex p-4 items-center gap-1 w-full text-left"
            >
              Catalog
              <RiArrowDownSLine size={16} className="mt-1" />
            </button>
            <div
              className={`overflow-hidden px-2 py-0 rounded-lg shadow-lg flex flex-col relative left-[7%] transition-all duration-300 ease-in-out ${
                open ? "max-h-[150px] opacity-100 py-4" : "max-h-0 opacity-0"
              } ${
                isScrolled
                  ? "bg-[#222222] text-[#ffffff]"
                  : "bg-[#ffffff] text-[#222222]"
              }`}
            >
              <Link
                className="hover:scale-110 block p-2"
                to="/Items?category=Man"
              >
                Men
              </Link>
              <Link
                className="hover:scale-110 block p-2"
                to="/Items?category=Woman"
              >
                Women
              </Link>
              <Link
                className="hover:scale-110 block p-2"
                to="/Items?category=Kids"
              >
                Kid
              </Link>
            </div>
          </div>

          <Link to="/AboutUS" className="block p-4">
            About Us
          </Link>
          <Link to="/ContactUs" className="block p-4">
            Contact US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
