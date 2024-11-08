import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      <About/>
      <Skills/>
      <Contact/>

    </div>
  );
}

export default App;
