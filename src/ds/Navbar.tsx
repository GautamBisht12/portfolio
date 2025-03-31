import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // You need to install this package

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Gautam Bisht</h1>
        <ul className="flex space-x-6">
          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="tech-stack"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Tech Stack
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
