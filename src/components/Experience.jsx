import React from "react";

const experiences = [
  {
    role: "Front-End Developer Intern",
    company: "Nutz Technologies, Erode",
    duration: "July 2024 - September 2024",
    details: "Designed and developed responsive UI components for Comez. Interacted with clients to gather requirements and deliver solutions. Collaborated with team to build scalable and user-friendly features."
  },
  {
    role: "GenAI Intern",
    company: "Generative Consortium & Systima NX",
    duration: "Nov 2024 - Jan 2025",
    details: "Implemented LSTM/RNN models and applied them to real-world use cases. Developed and fine-tuned Generative AI models for text-based applications. Built end-to-end AI pipelines, optimizing data preprocessing and model performance."
  }
];

const Experience = () => {
  return (
    <section className="px-8 py-16  text-white rounded-t-[80%_80%_80%_80%/50%_50%_100%_100%]  "
    id="experience">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#0a2b6f]/60 p-15 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="italic text-sm my-2">{exp.company}</p>
            <p className="text-xs mb-4">{exp.duration}</p>
            <p className="text-sm">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
