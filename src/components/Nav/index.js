import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    sections = [],
    setCurrentSection,
    currentSection,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSection.name);
  }, [currentSection]);

  return (
    <header>
      <h2>
        <a style={{ textDecoration: 'none' }} href="/">
          <span role="img" aria-label="camera"> 📸</span> Jenna Saikaly
        </a>
      </h2>
      <nav>
        <ul className="nav-list">
          {sections.map((section) => (
            <li className={`nav-item ${currentSection.name === section.name && 'navActive'
              }`} key={section.name}>
              <span
                onClick={() => {
                  setCurrentSection(section)
                }}
              >
                {capitalizeFirstLetter(section.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;