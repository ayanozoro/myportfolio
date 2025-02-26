import React from 'react';
import './App.css';
import Navbar from './Components/Navbars/Navbar.jsx';
import Home from './Components/Homes/Home.jsx';
import Skills from './Components/Skill/Skills.jsx';
import About from './Components/Abouts/About.jsx'; 
import Project from './Components/Proj/Project.jsx';
import Contact from './Components/Contacts/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
