import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <main className="lg:ml-80 bg-white">
        <div className="max-w-6xl mx-auto">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;