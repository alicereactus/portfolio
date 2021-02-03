import React from 'react'

import style from './Project.module.scss';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <img src={props.imageUrl} alt='projectImg' />
                <div className={style.links}>
                    <a href={props.repoLink} target="_blank">REPO</a>
                    <a href={props.demoLink} target="_blank">DEMO</a>
                </div>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p className={style.description}>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default Project;