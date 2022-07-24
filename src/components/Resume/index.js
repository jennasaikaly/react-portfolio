import React from 'react';
import resume from '../../assets/images/cover/Coming-Soon-Banner_placeholder-1200x349.jpg'

function Resume() {
    return (
        <div className='resume-container'>
            <div className='resume'>
                <div>
                    <a
                        href={resume}
                        download
                    >
                        Download my Résumé
                    </a>
                </div> </div>
            <div className='proficiencies'>
                <h4> Summary of My Proficiencies: </h4>

                <h5>Front-End</h5>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>React</li>
                </ul>

                <h5>Back-End</h5>
                <ul>
                    <li>RESTFUL APIs</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>Model-View-Controller (MVC)</li>
                    <li>Progressive Web Applications (PWA)</li>
                </ul>

                <h5>Databases</h5>
                <ul>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>NoSQL</li>
                    <li>MongoDB/Mongoose</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>

    );
}

export default Resume;