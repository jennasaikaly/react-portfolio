import React from 'react';

function Nav() {
    const categories = [
        { name: "About", description: "Who am I?", },
        { name: "Portfolio", description: "View my Work", },
        { name: "Contact", description: "Get in Touch" },
        { name: "Resume", description: "My credentials" },
    ];

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Jenna Saikaly
                </a>
            </h2>
            <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
        </header>
    );
}

export default Nav;