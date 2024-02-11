import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App
