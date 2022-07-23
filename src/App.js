import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer'
import Portfolio from "./components/Portfolio";
import ContactForm from './components/ContactForm';

function App() {

  
  // const [sections] = useState([
  //   { name: "About", description: "Who am I?", },
  //   { name: "Portfolio", description: "View my Work", },
  //   { name: "Contact", description: "Get in Touch" },
  //   { name: "Resume", description: "My Credentials" },
  // ]);

  const [currentSection, setCurrentSection] = useState("About");
  function changePage(page) {
    if (page === "About") {
      return <About />
    }
    if (page === "Portfolio") {
      return <Portfolio />
    }
    if (page === "Contact") {
      return <ContactForm />
    }
    //  if (page === "Resume"){
    //   return <Resume />
    //  }
  }
  return (
    <div className="app-container">
      <Nav
        // sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      >

      </Nav>
      <main>

        {changePage(currentSection)}

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
