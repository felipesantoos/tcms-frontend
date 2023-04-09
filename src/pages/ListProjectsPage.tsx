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
            <table border={1}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {projects?.map(project => (
                    <ProjectListItem key={project.id} project={project} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListProjectsPage;
