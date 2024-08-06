import  { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const Navlayout = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(110,108,108)] bg-opacity-25 backdrop-blur-md mt-2 p-5 w-full rounded-lg md:w-[60vw] md:mx-auto">
        <div className="container mx-auto flex items-center relative md:flex justify-between">
          <p>
            <ScrollLink to="home" smooth={true} duration={500}>
              <a className="absolute top-0 left-0  md:relative mb-1 px-3 flex items-center text-xl  text-pink-200 cursor-pointer">
                cynthia.
              </a>
            </ScrollLink>
          </p>
          {/* w-full md:w-3/6
          In this situation, you want the with to be full in small devics */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:items-center md:w-auto`}
          >
            <ul className=" mt-12 border-t border-t-gray-400 text-center uppercase text-sm transition duration-400 md:flex md:space-x-5 text-pink-200 md:mt-0 md:border-t-0">
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                {" "}
                <ScrollLink
                  to="RecentProjects"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden ">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 absolute flex items-center top-0 right-0 md:relative md:py-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navlayout;
