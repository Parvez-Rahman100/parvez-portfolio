import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';




const ProjectDetails = () => {


    const [project, setProject] = useState({})
    const { img, desc, title } = project;
    const { id } = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/projects/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])

    return (
        <div className='projects-card'>
            <img src={img} alt='projects screenshots' />
            <h2 className='project-title'>{title}</h2>

            <div className='projects-details'>
                <p>{desc}</p>
                <div className='projects-btn'>
                    <Link to='/' className='btn'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;