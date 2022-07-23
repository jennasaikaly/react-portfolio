import React from 'react';

function Nav(props) {
  
  const {
    setCurrentSection,
    currentSection,
  } = props;

  return (
    <header>
      <h2>
        <a style={{ textDecoration: 'none' }} href="/">
            Jenna Saikaly
        </a>
      </h2>
      <nav>
        <ul className="nav-list">
        <li className={currentSection === "About" ? "nav-item navActive" : "nav-item"}>
					<span onClick={() => setCurrentSection("About") }>About Me</span>
				</li>
        <li className={currentSection === "Portfolio" ? "nav-item navActive" : "nav-item"}>
					<span onClick={() => setCurrentSection ("Portfolio")}>Portfolio</span>
				</li>
        <li className={currentSection === "Contact" ? "nav-item navActive" : "nav-item"}>
        <span onClick={() => setCurrentSection("Contact")}>Contact</span>
				</li>
        <li className={currentSection === "Resume" ? "nav-item navActive" : "nav-item"}>
					<span onClick={() => setCurrentSection("Resume")}>Résumé</span>
				</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;