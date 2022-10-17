import React from 'react';
import { NavLink } from 'react-router-dom';
import project1 from '../Assests/Project1.png';
import './ProjectsCard.css';

const ProjectsCard = ({ pro }) => {
    console.log(pro);
    return (

        <div className='work-container'>
            <h1 className='projects-heading'>Projects</h1>
            <div className='projects-container'>
                <div className='projects-card'>
                    <img src={project1} alt='projects screenshots' />
                    <h2 className='project-title'>Alumni Association</h2>

                    <div className='projects-details'>
                        <p>Projects text will be here</p>
                        <div className='projects-btn'>
                            <NavLink to='url.com' className='btn'>View</NavLink>
                            <NavLink to='url.com' className='btn'>Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectsCard;