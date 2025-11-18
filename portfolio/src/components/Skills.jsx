import React from 'react';

const skills = ["JavaScript", "Node.js", "Express", "MongoDB", "SQL", "REST API", "Git", "Auth"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-300">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="px-6 py-3 bg-gray-200 text-gray-900 rounded-full font-semibold hover:scale-105 transition">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
