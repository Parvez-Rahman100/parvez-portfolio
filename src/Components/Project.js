import React from 'react';
import { NavLink } from 'react-router-dom';


const Project = ({ project }) => {
    const { img, title, desc, live, ClientCode } = project;

    return (
        <div className='projects-card'>
            <img src={img} alt='projects screenshots' />
            <h2 className='project-title'>{title}</h2>

            <div className='projects-details'>
                <p>{desc}</p>
                <div className='projects-btn'>
                    <NavLink to={live} className='btn'>View</NavLink>
                    <NavLink to={ClientCode} className='btn'>Source</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Project;