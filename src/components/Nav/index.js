import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  const sections = [
      { name: "About", description: "Who am I?", },
      { name: "Portfolio", description: "View my Work", },
      { name: "Contact", description: "Get in Touch" },
      { name: "Resume", description: "My Credentials" },
  ];

  function sectionSelected(name) {
    console.log(`${name} clicked`)
  }
  return (
    <header>
      <h2>
        <a style={{ textDecoration: 'none' }} href="/">
          <span role="img" aria-label="camera"> 📸</span> Jenna Saikaly
        </a>
      </h2>
      <nav>
        <ul className = "nav-list">
          {/* <li>
            <a style={{ textDecoration: 'none' }} href="#about">
              About me
            </a>
          </li>
          <li>
            <a style={{ textDecoration: 'none' }} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a style={{ textDecoration: 'none' }} href="#contact">
              Contact Me
            </a>
          </li>
          <li>
            <a style={{ textDecoration: 'none' }} href="#resume">
              Resume
            </a>
          </li> */}
          {sections.map((section) => (
        <li
          className="nav-item"
          key={section.name}
        >
          <span onClick={() => sectionSelected(section.name)} >
            {section.name}
          </span>
        </li>
      ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;