import React from 'react'
import Fade from 'react-reveal/Fade'

import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'

import { skills } from '../common/data/skills-data'
import Skill from './Skill/Skill';
import Title from '../common/components/Title/Title';

function Skills() {
  return (
    <div className={style.skillsBlock} id='skillsBlock'>
      <div className={`${styleContainer.container} ${style.skillsContainer} `}>
        <Title title='skills' />
        <div className={style.skills}>
          {
            skills.map(s => <Skill
              key={s.id}
              id={s.id}
              title={s.title}
              imgUrl={s.imgUrl} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Skills;