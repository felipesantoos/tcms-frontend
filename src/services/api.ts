import Project from "../models/Project";


export const getProjects = async (): Promise<Project[]> => {
    const response = await fetch("http://localhost:8080/api/project");
    const data = await response.json();
    return data;
};