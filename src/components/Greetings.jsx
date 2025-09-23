import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = [
  { text: "Hello", fontClass: "font-roboto" },
  { text: "வணக்கம்", fontClass: "font-balsamiq" },
  { text: "ನಮಸ್ಕಾರ", fontClass: "font-noto-kannada" },
  { text: "नमस्ते", fontClass: "font-hind" },
];

export default function RotatingGreeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-5xl italic z-0 text-gray-200 mt-20"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className={`water-text ${greetings[index].fontClass}`}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1 }}
        >
          {greetings[index].text}!
        </motion.span>
      </AnimatePresence>
    </motion.h2>
  );
}
