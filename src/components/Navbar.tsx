import { Layout } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 flex items-center gap-6 border border-white/20">
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <Layout className="w-5 h-5" />
          </a>
          <a
            href="#skills"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
