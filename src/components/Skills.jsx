import { motion } from "framer-motion";

// --- your imports for logos here ---
import java from "../assets/java.png";
import python from "../assets/python.png";
import c from "../assets/c.png";
import js from "../assets/Javascript.png";
import react from "../assets/react.png";
import mongo from "../assets/mongodb.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import tensorflow from "../assets/tensorflow.png";
import mysql from "../assets/mySQL.png";
import openCV from "../assets/opencv.png";
import figma from "../assets/figma.png";
import adobeXD from "../assets/AdoveXD.png";
import framer from "../assets/Framer.png";
import power from "../assets/PowerBI.png";
import kaggle from "../assets/kaggle.png";
import notion from "../assets/Notion.png";
import github from "../assets/github.png";
import terminal from "../assets/Terminal.png";
import colab from "../assets/Colab.png";
import git from "../assets/Git.png";
import wordpress from "../assets/Wordpress.png";
import live from "../assets/AbletonLive.png";
import Davince from "../assets/DavinceResolve.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center text-white py-10 overflow-hidden"
    >
      {/* Blob background */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="mt-20 w-[70%] h-[85%] rounded-[100%_100%_100%_100%/50%_50%_100%_100%] bg-gradient-to-b from-[#1e3a8a]/20 to-[#2563eb]/20 backdrop-blur-xl shadow-2xl"></div>
      </div>

      {/* Section title */}
      <h2 className="text-3xl font-bold mb-12 tracking-widest">SKILL <span className="text-blue-900">SET</span></h2>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 max-w-5xl w-full px-6">
        {/* Languages */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-black/70 rounded-xl shadow-lg"
        >
          <h3 className="bg-white text-black font-semibold px-4 py-2 rounded-t-xl">
            Languages
          </h3>
          <div className="flex justify-around gap-8 py-6">
            <img src={java} alt="Java" className="h-12" />
            <img src={python} alt="Python" className="h-12" />
            <img src={c} alt="C" className="h-12" />
          </div>
        </motion.div>

        {/* Web Kit */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-black/70 rounded-xl shadow-lg row-span-2"
        >
          <h3 className="bg-white text-black font-semibold px-4 py-2 rounded-t-xl">
            Web Kit
          </h3>
          <div className="grid grid-cols-4 gap-6 justify-items-center py-6">
            <img src={js} alt="JavaScript" className="h-12" />
            <img src={react} alt="React" className="h-12" />
            <img src={mongo} alt="MongoDB" className="h-12" />
            <img src={html} alt="HTML" className="h-12" />
            <img src={css} alt="CSS" className="h-12" />
            <img src={node} alt="Node.js" className="h-12" />
            <img src={express} alt="Express.js" className="h-12" />
            <img src={tensorflow} alt="TensorFlow" className="h-12" />
            <img src={mysql} alt="MySQL" className="h-12" />
            <img src={openCV} alt="OpenCV" className="h-12" />
          </div>
        </motion.div>

        {/* UI/UX */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-black/70 rounded-xl shadow-lg"
        >
          <h3 className="bg-white text-black font-semibold px-4 py-2 rounded-t-xl">
            UI/UX Design
          </h3>
          <div className="flex justify-around gap-8 py-6">
            <img src={figma} alt="Figma" className="h-12" />
            <img src={adobeXD} alt="Adobe XD" className="h-12" />
            <img src={framer} alt="Framer" className="h-12" />
          </div>
        </motion.div>

        {/* Other Tools */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-black/70 rounded-xl shadow-lg md:col-span-2"
        >
          <h3 className="bg-white text-black font-semibold px-4 py-2 rounded-t-xl">
            Other Tools
          </h3>
          <div className="flex flex-wrap justify-around gap-6 py-6">
            <img src={kaggle} alt="Kaggle" className="h-10" />
            <img src={notion} alt="Notion" className="h-10" />
            <img src={github} alt="GitHub" className="h-10" />
            <img src={colab} alt="Colab" className="h-10" />
            <img src={terminal} alt="Terminal" className="h-10" />
            <img src={power} alt="Power BI" className="h-10" />
            <img src={git} alt="Git" className="h-10" />
            <img src={wordpress} alt="WordPress" className="h-10" />
            <img src={live} alt="Ableton Live" className="h-10" />
            <img src={Davince} alt="DaVinci Resolve" className="h-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
