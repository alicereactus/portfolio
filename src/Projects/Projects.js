import React from 'react'

import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'

import { projects } from '../common/data/projects-data'
import Project from './Project/Project';

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer} `}>
                <h2 className={style.title}>MY PROJECTS</h2>
                <div className={style.projects}>
                    {
                        projects.map(p => <Project
                            key={p.id}
                            id={p.id}
                            title={p.title}
                            description={p.description} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;