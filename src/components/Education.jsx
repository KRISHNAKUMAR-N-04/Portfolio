import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      school: "Kongu Engineering College",
      year: "2022 - 2026",
      description:
        "Focused on full-stack development, AI/ML fundamentals. CGPA: 7.94/10 (till 6th semester).",
    },
    {
      degree: "Higher Secondary (HSC)",
      school: "Nandha Central School [CBSE]",
      year: "2020 - 2022",
      description:
        "78.6 % in Science stream with a focus on Computer Science, Physics, and Mathematics.",
    },
    {
      degree: "SSLC",
      school: "Nandha Central School [CBSE]",
      year: "2020",
      description: "81.6 % with a strong foundation in core subjects.",
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-20 "
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-blue-900">Education</span>
      </motion.h2>

      {/* Timeline */}
      <div className="flex flex-col gap-8 min-w-5xl ">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/50 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-8 flex gap-10"
          >
            <GraduationCap className="w-10 h-10 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl text-black font-semibold">{edu.degree}</h3>
              <p className="text-black">{edu.school}</p>
              <p className="text-sm text-blue-900 font-medium">{edu.year}</p>
              <p className="mt-2 text-gray-700 text-sm">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
