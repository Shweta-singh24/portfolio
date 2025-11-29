import React from 'react';

const projects = [
  {
    title: "Notes App",
    desc: "A secure Notes Management REST API built using Node.js, Express, MongoDB, and JWT authentication Users can sign up, log in, and manage their personal notes (create, read, update, delete, pin, archive, etc).",
    tech: "Node.JS Express MongoDB , jwt",
    link: "https://github.com/Shweta-singh24/Notes-App"
  },
  {
    title: "Library - Management",
    desc: "A complete backend for managing a library system built with Node.js, Express, and MongoDB. Supports Admin and Student roles with JWT authentication, role-based access control, and book borrowing management.",
    tech: "Node.js, Express, MongoDB, Jwt, Rest api",
    link: "https://github.com/Shweta-singh24/library-mngt"
  },
  {
    title: "Expense Tracker API",
    desc: "A RESTful Expense Tracker Backend built with Node.js, Express, MongoDB (Mongoose), and JWT Authentication. It allows users to register, log in, and manage their expenses — including filtering, monthly reports, and category breakdowns.",
    tech: "Node.js, Express, MongoDB, Jwt, Rest api",
    link: "https://github.com/Shweta-singh24/Expense-tracker"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-400">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.desc}</p>
            <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
            <a href={project.link} className="text-black font-semibold hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
