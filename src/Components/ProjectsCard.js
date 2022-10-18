import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProjectsCard = ({ project }) => {
    const { img, title, desc, _id } = project;
    const navigate = useNavigate()
    const handleDetails = (_id) => {
        navigate(`/projects/${_id}`)
    }

    return (
        <div className='projects-card'>
            <img src={img} alt='projects screenshots' />
            <h2 className='project-title'>{title}</h2>

            <div className='projects-details'>
                <p>{desc}</p>
                <div className='projects-btn'>
                    <button onClick={() => handleDetails(_id)} className='btn'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;