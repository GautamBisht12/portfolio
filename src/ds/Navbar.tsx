import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Gautam Bisht</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="tech-stack"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
