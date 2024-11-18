import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact/contact';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
