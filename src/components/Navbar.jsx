import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
             backdrop-blur-3xl bg-white/5 px-8 py-3 
             rounded-3xl shadow-lg w-[90%] max-w-3xl"

             
        >
            <div className="flex justify-evenly items-center text-white font-extralight">
                <a href="#" className="hover:text-blue-400 transition">Home</a>
                <a href="#about" className="hover:text-blue-400 transition">About</a>
                <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
                <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
                <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            </div>
        </motion.nav>

    );
}
