"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { ANDROID_PROJECTS, WINDOWS_PROJECTS, WEB_PROJECTS, IOS_PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { useState } from "react";

const projectCategories = [
  { name: "Android", icon: "📱", projects: ANDROID_PROJECTS, color: "from-green-500 to-emerald-500" },
  { name: "Windows", icon: "🖥️", projects: WINDOWS_PROJECTS, color: "from-blue-500 to-cyan-500" },
  { name: "Web", icon: "🌐", projects: WEB_PROJECTS, color: "from-purple-500 to-pink-500" },
  { name: "iOS", icon: "📱", projects: IOS_PROJECTS, color: "from-gray-500 to-slate-500" }
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 min-h-screen"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 lg:py-20 text-center"
      >
        My Projects Portfolio
      </motion.h1>

      {/* Category Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
      >
        {projectCategories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 border-2 text-sm sm:text-base ${
              activeCategory === index
                ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg scale-105`
                : "bg-transparent text-gray-300 border-gray-600 hover:border-purple-500 hover:text-purple-400"
            }`}
          >
            <span className="mr-1 sm:mr-2">{category.icon}</span>
            <span className="hidden sm:inline">{category.name}</span>
            <span className="sm:hidden">{category.name.split(' ')[0]}</span>
          </button>
        ))}
      </motion.div>

      {/* Active Category Display */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${projectCategories[activeCategory].color} bg-clip-text text-transparent`}>
            {projectCategories[activeCategory].icon} {projectCategories[activeCategory].name} Development
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            {activeCategory === 0 && "Native Android applications built with modern development practices and cutting-edge technologies."}
            {activeCategory === 1 && "Desktop applications for Windows platform with robust functionality and intuitive user interfaces."}
            {activeCategory === 2 && "Full-stack web applications and dynamic websites with responsive design and modern frameworks."}
            {activeCategory === 3 && "iOS mobile applications developed with Swift and SwiftUI for optimal performance and user experience."}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
          {projectCategories[activeCategory].projects.map((project, projectIndex) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                link={project.link}
                description={project.description}
                tech={project.tech}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl"
      >
        {projectCategories.map((category, index) => (
          <div key={category.name} className="text-center">
            <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.projects.length}+
            </div>
            <div className="text-gray-400 text-sm mt-1">{category.name} Projects</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
