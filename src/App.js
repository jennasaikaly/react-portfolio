import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer'



function App() {
  return (
    <div className = "app-container">
      <Nav></Nav>
      <main>
        <div>
        <About></About>
        <Footer></Footer>
        </div>
      </main>
      
    </div>
  );
}

export default App;
