import React from 'react';
import Project from '../../models/Project';
import styles from './style.module.scss';
import ProjectServices from "../../services/ProjectServices";

interface Props {
    project: Project;
}

function ProjectListItem(props: Props) {
    const { project } = props;

    const services = new ProjectServices();

    return (
        <tr key={project.id} className={styles.container}>
            <td><a onClick={() => services.seeProjectDetails(project.id)}>{project.name}</a></td>
            <td>{project.description}</td>
            <td className={styles.actions}>
                <button
                    className={styles.editButton}
                    onClick={() => services.editProject(project)}>
                    Edit
                </button>
                <button
                    className={styles.deleteButton}
                    onClick={() => services.deleteProject(project.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ProjectListItem;
