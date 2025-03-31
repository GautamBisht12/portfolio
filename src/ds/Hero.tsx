import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Gautam Bisht</h1>
        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            1000,
            "WordPress Developer",
            1000,
            "Chrome Extension Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl text-white"
        />
      </div>
    </section>
  );
};

export default Hero;
