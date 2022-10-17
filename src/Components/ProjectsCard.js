import React from 'react';
import './ProjectsCard.css';
import url from '../ProjectsData.json';
import Project from './Project';


const ProjectsCard = () => {

    return (

        <div className='work-container'>
            <h1 className='projects-heading'>Projects</h1>
            <div className='projects-container'>
                {
                    url.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>

    );
};

export default ProjectsCard;