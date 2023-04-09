import React, {useEffect, useState} from 'react';
import Project from "../models/Project";
import {getProjects} from "../services/api";
import ProjectListItem from "../components/ProjectListItem";

function ListProjectsPage() {
    const [projects, setProjects] = useState<Project[]>()

    useEffect(() => {
        getProjects()
            .then(data => setProjects(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            {projects?.map(project => (
                <ProjectListItem key={project.id} project={project} />
            ))}
        </div>
    );
}

export default ListProjectsPage;
