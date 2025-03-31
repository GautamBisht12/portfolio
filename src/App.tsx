import SkillsCards from "./components/SkillsCards.tsx";
import { Mail, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";

import Certifications from "./components/Certificate.tsx";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
// import { MovingBorderDemo } from "./components/MovingButton.tsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-zinc-950 text-white relative">
      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <section className="py-20 px-4" id="skills">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Technical Expertise
          </h2>
          <SkillsCards />
        </div>
      </section>

      {/* Projects Section */}

      <Projects />

      <section>
        <Certifications />
      </section>

      {/* Certificate Section */}

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black/30" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              className="bg-purple-500 hover:bg-purple-600 text-white"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              <a href="mailTo:bishtwork012@gmail.com">Email Me</a>
            </Button>
            <Button
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              size="lg"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
