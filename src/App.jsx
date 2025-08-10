import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}