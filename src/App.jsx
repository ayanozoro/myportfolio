import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/skills/Skills';
import About from './components/about/About'; // Import About component
import Project from './components/proj/Project';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App w-full flex flex-col overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
