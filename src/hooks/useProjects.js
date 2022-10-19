import { useEffect, useState } from 'react';

const useProjects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const url = 'https://parvez-portfolio2.herokuapp.com/projects';
        fetch(url)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return [projects]
};

export default useProjects;