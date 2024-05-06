import React, { FC } from 'react'
import s from './Projects.module.scss'
import ProjectsCard from './ProjectsCard/ProjectsCard'

const Projects: FC = () => {
	return (
        <div className={`container ${s.ProjectsBox}`}>
         <ProjectsCard/>
        </div>
    );
};

export default Projects;
