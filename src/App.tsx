import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechExpertise from './components/TechExpertise';
import ProjectShowcase from './components/ProjectShowcase';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TechExpertise />
        <ProjectShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;