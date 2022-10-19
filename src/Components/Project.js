import React from 'react';
import './ProjectsCard.css';
import ProjectsCard from './ProjectsCard';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';



const Project = () => {

    const [projects] = useProjects()

    return (

        <div className='work-container'>
            <h1 className='projects-heading'>Projects</h1>
            {
                projects?.length ? (
                    <div className='projects-container'>
                        {
                            projects.map(project => <ProjectsCard
                                key={project.id}
                                project={project}
                            ></ProjectsCard>)
                        }
                    </div>
                ) : (
                    <Loading />
                )
            }
        </div>

    );
};

export default Project;