import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  
  Github, 
  Play, 
  Zap, 
  Users, 
} from 'lucide-react';

const ProjectShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Touchtyping App",
      category: "Phaser.js and React",
      icon: Users,
      color: "from-blue-500 to-purple-600",
      description: "Web application using phaser.js graphics engine and react for the frontend. The backend is a node.js server that uses websockets to communicate with the frontend.",
      technologies: ["TypeScript", "Phaser.js", "React", "Node.js", "WebSockets",],
      features: [
        "Automated deployment to Fly.io",
        "Progress Tracking & Analytics",
        "Mobile & Desktop Responsive"
      ],
      metrics: {
        users: "50+ concurrent users",
        latency: "<50ms sync time",
        uptime: "99.9% availability"
      },
      demoUrl: "https://typeblade.com",
      githubUrl: "https://github.com/srich3/typeblade",
      image: "https://i.imgur.com/t9JdMkI.png"
    },
  ];


  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Project Showcase
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world applications demonstrating expertise in modern web technologies
          </p>
        </motion.div>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => setActiveProject(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                activeProject === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {project.title}
            </motion.button>
          ))}
        </div>

        {/* Active Project Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-slate-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Project Info */}
              <div>
                <div className="flex items-center mb-6">
                  {(() => {
                    const IconComponent = projects[activeProject].icon;
                    return (
                  <div className={`w-14 h-14 bg-gradient-to-r ${projects[activeProject].color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{projects[activeProject].title}</h3>
                    <p className="text-lg text-slate-600">{projects[activeProject].category}</p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[activeProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>


                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={projects[activeProject].demoUrl}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={projects[activeProject].githubUrl}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center justify-center text-black"
                  >
                    <Github className="w-5 h-5 mr-2 text-black" />
                    <span className="text-black">View Code</span>
                  </motion.a>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">Live Project</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;