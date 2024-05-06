import React, { FC } from 'react';
import s from './OurProjects.module.scss'
import SlideCard from './SlideCard/SlideCard';
import ProjectCard from './ProjectCard/ProjectCard';

const OurProjects: FC = () => {
    return (
        <div className={s.OurProjects}>
            <div className={`container ${s.titleBox}`}>
                <h2 className={s.title}>Наши проекты</h2>
                <h4 className={s.moreProjects}>Еще проекты...</h4>
            </div>

            <SlideCard />
            <ProjectCard />
        </div>
    );
};

export default OurProjects;