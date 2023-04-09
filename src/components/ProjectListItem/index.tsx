import React from 'react';
import Project from '../../models/Project';
import './style.css';

interface Props {
    project: Project;
}

function ProjectListItem(props: Props) {
    const { project } = props;
    return (
        <div className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectListItem;
