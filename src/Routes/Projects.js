import React from 'react';
import Project from '../Components/Project';



const Projects = () => {

    return (
        <div>
            <div className='hero-section'>
                <div className='heading'>
                    <h1>PROJECTS</h1>
                    <p>Some of my recent works</p>
                </div>
            </div>
            <Project />
        </div>
    );
};

export default Projects;