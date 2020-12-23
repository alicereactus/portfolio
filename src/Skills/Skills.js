import React from 'react'

import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'

import { skills } from '../common/data/skills-data'
import Skill from './Skill/Skill';

function Skills() {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer} `}>
        <h2 className={style.title}>MY SKILLS</h2>
        <div className={style.skills}>
          {
            skills.map(s => <Skill
              key={s.id}
              id={s.id}
              title={s.title}
              description={s.description} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Skills;