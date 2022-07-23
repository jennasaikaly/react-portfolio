import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer'
import Portfolio from "./components/Portfolio";
import ContactForm from './components/ContactForm';



function App() {

  const [sections] = useState([
    { name: "About", description: "Who am I?", },
    { name: "Portfolio", description: "View my Work", },
    { name: "Contact", description: "Get in Touch" },
    { name: "Resume", description: "My Credentials" },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className = "app-container">
        <Nav 
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}></Nav>
      <main>
      <ContactForm></ContactForm>
        <Portfolio></Portfolio>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
