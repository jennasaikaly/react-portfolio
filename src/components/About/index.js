import React from 'react';

function About() {
  return (
    <section className="about-container">
      <div>
        <img className="img-avatar" src={require('../../assets/images/Avatar-Maker.png')}
          alt="avatar">
        </img>
      </div>
      <div>
        <h1 id="about">Welcome to my portfolio!</h1>
        <p>  My name is Jenna and I live in Ottawa, Ontario with my 2 cats.
          I'm currently enrolled in a Full-Stack Web Development course through Carleton University.</p>
          <p>This portfolio will contain the projects that I complete while I learn the course material.
          I hope that you enjoy them! </p>
      </div>
    </section>
  );
}

export default About;