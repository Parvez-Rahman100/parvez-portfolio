import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import url from '../../public/ProjectsData.json'




const Project = () => {
    const [project, setProject] = useState([]);
    console.log(project);
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    return (
        <div className='work-container'>
            <h1 className='projects-heading'>Projects</h1>
            <div className='projects-container'>
                {
                    project.map(pro => <ProjectsCard
                        key={pro.id}
                        pro={pro}
                    />)
                }
            </div>
        </div>
    );
};

export default Project;