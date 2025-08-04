import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="w-10 h-10 adobe-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Spencer Richardson</span>
            </motion.div>
            <p className="text-slate-400 leading-relaxed">

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '#expertise', label: 'Technical Expertise' },
                { href: '#projects', label: 'Project Showcase' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 flex items-center space-x-2"
            >
              <span>Built with</span>
              <Heart className="w-4 h-4 text-blue-500" />
              <span>using React, TypeScript & Framer Motion</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mt-4 md:mt-0"
            >
              <Zap className="w-4 h-4 text-blue-500" />
              <span className="text-slate-400">Ready for complex challenges</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;