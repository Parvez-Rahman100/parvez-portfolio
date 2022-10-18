import React from 'react';
import './ProjectsCard.css';
import ProjectsCard from './ProjectsCard';
import useProjects from '../hooks/useProjects';



const Project = () => {

    const [projects] = useProjects()

    return (

        <div className='work-container'>
            <h1 className='projects-heading'>Projects</h1>
            <div className='projects-container'>
                {
                    projects.map(project => <ProjectsCard
                        key={project.id}
                        project={project}
                    ></ProjectsCard>)
                }
            </div>
        </div>

    );
};

export default Project;