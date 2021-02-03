import React from 'react'

import style from './Skill.module.scss';

function Skill(props) {
    return (
        <div className={style.skillContainer}>
            <div className={style.skill}>
                <img src={props.imgUrl} alt='skillImg' />
                <span className={style.title}>{props.title}</span>
            </div>
        </div>
    );
}

export default Skill;