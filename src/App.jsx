import React from 'react';
import SiteNavbar from './components/SiteNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Experience from './components/Experience';
import EducationCerts from './components/EducationCerts';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div>
      <SiteNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Insights />
      <Experience />
      <EducationCerts />
      <Contact />
      <SiteFooter />
    </div>
  );
}
