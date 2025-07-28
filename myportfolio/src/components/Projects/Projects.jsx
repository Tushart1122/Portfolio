import React, { useState } from "react";
import { projects } from "../../constants";
import { FiArrowLeft, FiX } from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Optionally scroll back to projects section
    const section = document.getElementById("work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-x-96 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="h-[550px] border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col
            w-80"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-xl"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-2xl font-bold text-white mb-0.25 leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-800">
            {/* SUPER PROMINENT Header with HUGE Back Button */}
            <div className="sticky top-0 z-30 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 border-b-4 border-purple-400 rounded-t-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                {/* MASSIVE, IMPOSSIBLE TO MISS Back Button */}
                <button
                  onClick={handleCloseModal}
                  className="flex items-center gap-4 bg-white hover:bg-gray-100 text-purple-800 px-8 py-4 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-purple-300/50 hover:scale-110 border-2 border-purple-200 hover:border-purple-300"
                >
                  <FiArrowLeft className="text-xl font-bold" />
                  <span className="text-xl font-bold">BACK TO PROJECTS</span>
                </button>
                
                {/* Large Close X Button */}
                <button
                  onClick={handleCloseModal}
                  className=""
                >
                  <FiX className="text-2xl" />
                </button>
              </div>
              
              {/* Additional visual separator */}
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full"></div>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col p-6 lg:p-8">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-contain rounded-xl shadow-xl mb-6"
              />
              <h3 className="lg:text-3xl font-bold text-white mb-4 text-2xl">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-6 lg:text-base text-sm leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 border border-purple-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-700 hover:bg-gray-700 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    View Code
                  </a>
                )}
                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;