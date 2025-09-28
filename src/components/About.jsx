import { motion } from "framer-motion";
import profile from "../assets/GitProfile 3.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-fit flex flex-col items-center justify-center text-white px-6 pt-26 "
    >
      {/* Title */}
      

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl bg-sky-400/20  backdrop-blur-lg rounded-2xl  shadow-xl p-8 flex flex-col md:flex-row gap-8"
      >
        {/* Left Image
        <img
          src={profile} // or your imported image
          alt="About"
          className="w-40 h-40 rounded-full  object-cover border-2 border-blue-500 shadow-lg mx-auto md:mx-0"
        /> */}

        {/* Right Content */}
        <div className="p-13">  
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center "
      >
        About <span className="text-blue-900">Me</span>
      </motion.h2>
          <p className="text-white leading-relaxed font-semibold text-lg">
            I’m <span className="text-blue-400 font-medium">Krishnakumar</span>, a Front-End Designer & Developer passionate about creating responsive web experiences. Skilled in React, JavaScript, and Java, I bring designs to life with clean, intuitive code. Let's craft dynamic, user-centric websites together!
          </p>
          <p className="mt-4 text-white">
            I aim to merge creativity and technology to deliver impactful solutions 🚀.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
