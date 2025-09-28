import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Phone } from "lucide-react";
import profile from "../assets/GitProfile 3.png"; // 🔹 Replace with your profile image path

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-fit py-45 flex items-center justify-center  text-white">
      <div className="relative z-10 w-fit max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Profile Image */}
        <motion.img
          src={profile} // 🔹 Replace with your profile image path
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Name */}
        <motion.h2
          className="text-4xl font-extrabold mb-2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          KRISHNAKUMAR N
        </motion.h2>

        {/* Roles */}
        <motion.p
          className="text-lg text-gray-200 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer | UI/UX Designer | Public Speaker
        </motion.p>

        {/* Subtext */}
        <motion.p
          className="text-sm text-white mb-8"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          © Designed & Developed by Krishnakumar N
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/krishnakumar-nagarajan/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition transform hover:scale-110 shadow-md"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/KRISHNAKUMAR-N-04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-700 transition transform hover:scale-110 shadow-md"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LeetCode (custom SVG) */}
          <a
            href="https://leetcode.com/u/N_KRISHNAKUMAR/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-yellow-500 transition transform hover:scale-110 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M9.2 23.9L20.6 12.5l2.9 2.9L12.1 26.8zm7.1 7.1l2.9-2.9 6.4 6.4 11.4-11.4-11.4-11.4-6.4 6.4-2.9-2.9 9.3-9.3 14.3 14.3-14.3 14.3z"/>
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:+919025380910"
            className="p-3 rounded-full bg-white/10 hover:bg-green-600 transition transform hover:scale-110 shadow-md"
          >
            <Phone className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
