import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    tech: "React, TailwindCSS, Framer Motion",
    link: "https://github.com/KRISHNAKUMAR-N-04/Portfolio",
    description: "A personal portfolio website showcasing projects, skills, and experience with smooth animations and responsive design."
  },
  {
    title: "E-commerce Platform",
    tech: "React, Node.js, MongoDB, Razorpay",
    link: "https://trendify-outfit.netlify.app/",
    description: "Full-stack e-commerce app for clothing, including user authentication, payment integration, and admin dashboard."
  },
  {
    title: "Movie Recommendation System",
    tech: "DeepLearning, Cosine Similarity, Python",
    link: "https://github.com/KRISHNAKUMAR-N-04/Movie-Recommendation",
    description: "A web app that recommends movies based on user input using NLP and deep learning techniques."
  },
  {
    title: "Barberooker - Frontend",
    tech: "React, TailwindCSS, HTML",
    link: "https://github.com/KRISHNAKUMAR-N-04/Barberooker",
    description: "A responsive frontend for a barber booking service with user-friendly UI and seamless navigation."
  }
];

const Projects = () => {
  return (
    <section className="px-8 py-16  text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <div key={index} className="bg-[#0d2b5c]/50 p-16 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2"><a href={proj.link}>{proj.title}</a></h3>
            <p className="italic text-sm mb-2">{proj.tech}</p>
            <p className="text-sm">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
