import React from 'react'
import Fade from 'react-reveal/Fade'

import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'

import { projects } from '../common/data/projects-data'
import Project from './Project/Project';
import Title from '../common/components/Title/Title';

function Projects() {
    
    return (
        <div className={style.projectsBlock} id='projectsBlock'>
            <Fade>
            <div className={`${styleContainer.container} ${style.projectsContainer} `}>
                <Title title='Projects' />
                <div className={style.projects}>
                    {
                        projects.map(p => <Project
                            key={p.id}
                            id={p.id}
                            title={p.title}
                            description={p.description}
                            imageUrl={p.imageUrl}
                            repoLink={p.repoLink}
                            demoLink={p.demoLink} />)
                    }
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Projects;