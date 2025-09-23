import { motion } from "framer-motion";
import { useState } from "react";
import profile from '../assets/GitProfile 3.png';
import Greetings from "./Greetings";

export default function Hero() {
  const [available, setAvailable] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center  text-white overflow-hidden "
      
    >
        
      {/* Background Blob Shape */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="absolute top-20 w-[80%] max-w-5xl h-[85%] rounded-[80%_80%_80%_80%/50%_50%_100%_100%] bg-gradient-to-b from-[#1e3a8a]/30 to-[#2563eb]/50 backdrop-blur-xl shadow-2xl"
      />

      {/* Navbar Placeholder (already in Navbar.jsx, but for alignment in hero) */}
      <div className="absolute top-6 w-full flex justify-between items-center px-12">
        <h1 className="text-xl font-semibold tracking-wide">Krishnakumar.</h1>
        <ul className="hidden md:flex gap-8 text-gray-200">
          
        </ul>
        <button className="bg-black px-4 py-2 rounded-full font-medium text-white hover:bg-gray-800 transition">
          Contact
        </button>
      </div>

      {/* Text Above Profile */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-[7%]"
      >
        <Greetings/>
      </motion.h2>

      {/* Profile Image */}
      <motion.img
        src={profile} // replace with your profile image
        alt="Profile"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="relative z-10 w-[22%] w-[22%]  mt-[5%] rounded-full  shadow-gray-950 shadow-2xl object-cover "
      />

      {/* Availability Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute left-[15%] top-[50%] flex items-center gap-3 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20 shadow-lg"
      >
        <button
          onClick={() => setAvailable(!available)}
          className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
            available ? "bg-blue-500" : "bg-gray-400"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
              available ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span className="text-sm">
          {available ? "Available for new opportunities" : "Not available"}
        </span>
      </motion.div>

      {/* Right Side Specialization Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute right-[15%] top-[50%] text-sm text-gray-200 max-w-[180px] text-left"
      >
        Specialized in Web Design, <br />
        UI/UX, Wireframing and <br />
        Front-end Development
      </motion.div>

      {/* Bottom Name Split */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-[1g0%] flex w-full justify-between px-12 text-3xl sm:text-4xl md:text-5xl font-extrabold"
      >
        <span>I'M <br /> KRISHNAKUMAR</span>
        <span className="text-right">FRONT <br /> END DEVELOPER</span>
      </motion.div>
    </section>
  );
}
