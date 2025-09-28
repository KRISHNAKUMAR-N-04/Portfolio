import { motion } from "framer-motion";
import { useState } from "react";
import profile from '../assets/GitProfile 3.png';
import Greetings from "./Greetings";
import name from '../assets/Krishnakumar..png'

export default function Hero() {

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
        className="
    absolute inset-0 mx-auto mt-20
    w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%]
    h-[55%] sm:h-[65%] md:h-[75%] lg:h-[80%] xl:h-[85%] 
    max-w-7xl
    rounded-[80%_80%_80%_80%/50%_50%_100%_100%]
    bg-gradient-to-b from-[#1e3a8a]/30 to-[#2563eb]/50
    backdrop-blur-xl shadow-2xl
  "
      />


      {/* Navbar Placeholder (already in Navbar.jsx, but for alignment in hero) */}
      <div className="absolute top-6 w-full flex justify-between pl-35 pr-35 items-center px-12">
        <img src={name} alt="Logo" className="h-4.5 w-auto" />
        <ul className="hidden md:flex gap-8 text-gray-200">

        </ul>
        <a href="#contact">
        <button className="bg-black px-4 py-2 rounded-full font-medium text-white hover:bg-gray-800 transition">
          Contact
        </button>
        </a>
        
      </div>

      {/* Text Above Profile */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        className="mt-[7%] z-12"
      >
        <Greetings />
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

      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute left-[15%] top-[50%] flex items-center gap-3 
             bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full 
             border border-white/20 shadow-lg"
      >
        {/* Static Status Dot */}
        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
        <span className="text-sm">Available for opportunities</span>
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
        className="absolute bottom-[10%] flex w-full justify-between px-12 text-3xl sm:text-4xl md:text-5xl font-extrabold"
      >
        <span>I'M <br /> KRISHNAKUMAR</span>
        <span className="text-right">FRONT <br /> END DEVELOPER</span>
      </motion.div>
    </section>
  );
}
