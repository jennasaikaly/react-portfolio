//imports React and useState 
// import React, { useState } from 'react';
import React from 'react';
// import Modal from '../Modal';

const Project = () => {

    const projects = [
        {
            name: 'Portfolio',
            image: 'first-portfolio.jpg',
            github: 'https://github.com/jennasaikaly/portfolio.git',
            deployed: 'https://jennasaikaly.github.io/portfolio/'
        },
        {
            name: 'Networking Sustainability',
            image: 'networking-sustainability.jpg',
            github: 'https://github.com/jennasaikaly/sustainability-event-app',
            deployed: 'https://networking-sustainability-app.herokuapp.com/'
        },
        {
            name: 'Open Fields',
            image: 'open-fields.jpg',
            github: 'https://github.com/ShaunSully88/Open-Fields',
            deployed: 'https://shaunsully88.github.io/Open-Fields/'
        },
        {
            name: 'Weather Dashboard',
            image: 'weather-dashboard.jpg',
            github: 'https://github.com/jennasaikaly/weather-dashboard.git',
            deployed: 'https://jennasaikaly.github.io/weather-dashboard/'
        },
        {
            name: 'Home Garden Manager',
            image: 'home-garden-manager.jpg',
            github: 'https://github.com/SierraDavis2000/Home-Garden-Manager',
            deployed: 'https://warm-harbor-34559.herokuapp.com/'
        },
        {
            name: 'Budget Tracker',
            image: 'budget-tracker.jpg',
            github: 'https://github.com/jennasaikaly/budget-tracker',
            deployed: 'https://jennasaikaly-budget-tracker.herokuapp.com/'
        },
    ];

    return (
        <div className='project-container'>
                {projects.map((project) => (
                    <div
                        className="flip-card"
                        key={project.name}
                    >
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <img className ="img-project" src={require('../../assets/images/projects/' + project.image)}
                                    alt={project.name}>
                                </img>
                            </div>
                            <div className='flip-card-back'>
                                <h1>{project.name}</h1>
                                <a href={project.github}>
                                <img className = "img-github"src={require('../../assets/images/github-mark/PNG/GitHub-Mark-64px.png')}
                                    alt='Github'>
                                </img>
                                </a>
                                <a href={project.deployed}>Deployed site</a>
                            </div>
                        </div>
                    </div>
                ))}
         </div>
    );
}

export default Project;