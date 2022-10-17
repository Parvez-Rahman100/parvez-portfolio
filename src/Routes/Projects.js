import React from 'react';
import ProjectsCard from '../Components/ProjectsCard';


const Projects = () => {

    return (
        <div>
            <div className='hero-section'>
                <div className='heading'>
                    <h1>PROJECTS</h1>
                    <p>Some of my recent works</p>
                </div>
            </div>
            <ProjectsCard />
        </div>
    );
};

export default Projects;