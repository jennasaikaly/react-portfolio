//imports React and useState 
// import React, { useState } from 'react';
import React from 'react';
// import Modal from '../Modal';

const Project = () => {

    const projects = [
        {
            name: 'Portfolio',
            image: '0.jpg',
            github: 'https://jennasaikaly.github.io/portfolio/',
            deployed: 'https://github.com/jennasaikaly/portfolio.git'
        },
        {
            name: 'Password Generator',
            image: '1.png',
            github: 'https://github.com/jennasaikaly/password-generator.git',
            deployed: 'https://jennasaikaly.github.io/password-generator/'
        },
        {
            name: 'Open Fields',
            image: '2.jpg',
            github: 'https://github.com/ShaunSully88/Open-Fields',
            deployed: 'https://shaunsully88.github.io/Open-Fields/'
        },
        {
            name: 'Weather Dashboard',
            image: '3.jpg',
            github: 'https://github.com/jennasaikaly/weather-dashboard.git',
            deployed: 'https://jennasaikaly.github.io/weather-dashboard/'
        },
        {
            name: 'Home Garden Manager',
            image: '4.jpg',
            github: 'https://github.com/SierraDavis2000/Home-Garden-Manager',
            deployed: 'https://warm-harbor-34559.herokuapp.com/'
        },
        {
            name: 'Budget Tracker',
            image: '5.jpg',
            github: 'https://github.com/jennasaikaly/budget-tracker',
            deployed: 'https://jennasaikaly-budget-tracker.herokuapp.com/'
        },
    ];

    return (
        <div>
            <div>
                {projects.map((project) => (
                    <div
                        className="project-card"
                        key={project.name}
                    >
                        <div>
                            {project.name}
                        </div>
                        <img src={require('../../assets/images/projects/' + project.image)} 
                        
                        alt={project.name}></img>
                        <a href={project.github}>Github</a>
                        <a href={project.deployed}>Deployed site</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;