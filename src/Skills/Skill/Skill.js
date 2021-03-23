import React from 'react'
import Fade from 'react-reveal/Fade'

import style from './Skill.module.scss';

function Skill(props) {
    return (
        <Fade>
            <div className={style.skillContainer}>
                <div className={style.skill}>
                    <img src={props.imgUrl} alt='skillImg' />
                    <span className={style.title}>{props.title}</span>
                </div>
            </div>
        </Fade>
    );
}

export default Skill;