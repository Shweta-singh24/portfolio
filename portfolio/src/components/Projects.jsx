import React from 'react';

const projects = [
  {
    title: "Notes App",
    desc: "A secure Notes Management REST API built using Node.js, Express, MongoDB, and JWT authentication Users can sign up, log in, and manage their personal notes (create, read, update, delete, pin, archive, etc).",
    tech: "Node.JS Express MongoDB",
    link: "#"
  },
  {
    title: "Todo App",
    desc: "This project is a backend-only Todo application that allows users to create, read, update, and delete todos. It is built using Express.js and MongoDB (Mongoose). The API is tested using Postman and ready to connect with any frontend.",
    tech: "Node.js, Express, MongoDB",
    link: "#"
  },
  {
    title: "E-commerce Backend",
    desc: "Order management and payment API",
    tech: "Spring Boot, MySQL",
    link: "#"
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
