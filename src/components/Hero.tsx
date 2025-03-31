import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import "../App.css";
import { BackgroundLines } from "@/components/ui/background-lines";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-4">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4  relative">
          <div className="max-w-4xl text-center z-50">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl"
            >
              ✋Hii I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className=" animate-gradient bg-300 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6"
            >
              Gautam Bisht
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-zinc-300 mb-8"
            >
              A passionate web developer specializing in crafting dynamic and
              responsive web applications. With expertise in the MERN stack,
              WordPress development, Chrome extensions, and web scraping, I
              create clean, efficient, and user-friendly solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-xl md:text-2xl text-zinc-300 mb-8"
            >
              Let's build something amazing together! 🧑‍💻
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 justify-center z-30"
            >
              <Button
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                size="lg"
              >
                <Github className="mr-2 h-5 w-5" />
                <a href="https://github.com/GautamBisht12" target="_blank">
                  GitHub
                </a>
              </Button>
              <Button
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                size="lg"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </motion.div>
          </div>
        </BackgroundLines>
      </section>
    </>
  );
};

export default Hero;
