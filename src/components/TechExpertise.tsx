import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Palette,
  Brain,
} from 'lucide-react';

const TechExpertise: React.FC = () => {
  const expertiseAreas = [
    {
      category: "Core Languages",
      icon: Code2,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "TypeScript", level: 80, description: "" },
        { name: "C#", level: 70, description: "" },
        { name: "PHP", level: 90, description: "" },
        { name: "Python", level: 75, description: "" }
      ]
    },
    {
      category: "Web Technologies",
      icon: Globe,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "HTML/CSS/JS", level: 90, description: "" },
        { name: "React", level: 80, description: "" },
        { name: "Angular", level: 60, description: "" },
        { name: "Drupal", level: 85, description: "" }
      ]
    },
    {
      category: "Platform & Tools",
      icon: Layers,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Node.js", level: 93, description: "" },
        { name: "Express.js", level: 85, description: "" },
        { name: "Docker", level: 62, description: "" },
        { name: "GitHub", level: 70, description: "" }
      ]
    },
    {
      category: "Architecture & Systems",
      icon: Cpu,
      color: "from-purple-500 to-violet-600",
      skills: [
        { name: "AWS Systems", level: 88, description: "" },
        { name: "Real-time Collaboration", level: 80, description: "" },
        { name: "Performance Optimization", level: 70, description: "" },
        { name: "Scalable Architecture", level: 70, description: "" }
      ]
    },
    {
      category: "Multimedia & Graphics",
      icon: Palette,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Image Processing", level: 95, description: "" },
        { name: "Video/Audio", level: 90, description: "" },
        { name: "Animation", level: 70, description: "" },
        { name: "3D Graphics", level: 65, description: "" }
      ]
    },
    {
      category: "AI & Modern Tech",
      icon: Brain,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "AI Integration", level: 70, description: "" },
        { name: "Machine Learning", level: 50, description: "" },
        { name: "Data Processing", level: 80, description: "" },
        { name: "API Design", level: 90, description: "" }
      ]
    }
  ];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="expertise" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deep expertise across the full stack of modern web technologies, 
            with specialization in scalable systems and real-time applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.category}
              variants={cardVariants}
              className="tech-card bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <area.icon className="w-6 h-6 text-slate-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">{area.category}</h3>
              
              <div className="space-y-6">
                {area.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-800 text-sm">{skill.name}</span>
                      <span className="text-sm text-slate-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 bg-gradient-to-r ${area.color} rounded-full`}
                      />
                    </div>
                    <p className="text-sm text-slate-600 duration-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechExpertise;