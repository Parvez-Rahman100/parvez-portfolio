import React from 'react';
import './ProjectsCard.css';
import url from '../ProjectsData.json';
import ProjectsCard from './ProjectsCard';



const Project = () => {

    return (

        <div className='work-container'>
            <h1 className='projects-heading'>Projects</h1>
            <div className='projects-container'>
                {
                    url.map(project => <ProjectsCard
                        key={project.id}
                        project={project}
                    ></ProjectsCard>)
                }
            </div>
        </div>

    );
};

export default Project;