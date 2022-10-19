import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';




const ProjectDetails = () => {


    const [project, setProject] = useState({})
    const { img, desc, title } = project;
    const { id } = useParams()

    useEffect(() => {
        const url = `https://parvez-portfolio2.herokuapp.com/projects/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])

    return (
        <div className='pro-detls'>
            <div className='heros'>

                <div className='heading'>
                    <h1>{title}</h1>
                </div>
            </div>

            <div className='pro-card'>
                <div className='pro-imgs'>
                    <img src={img} alt='project screenshots' />
                </div>
                <div className='pro-info'>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;