import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
