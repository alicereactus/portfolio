import React from 'react'

import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href='#'>Посмотреть</a>
            </div>
            <span className={style.title}>{props.title}</span>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Project;