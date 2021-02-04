import React from 'react'

import Title from '../common/components/Title/Title'
import Links from '../common/components/Links/Links';

import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'

import Photo from '../assets/image/Photo.png'

function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={`${styleContainer.container} ${style.mainContainer} `}>
        <Title title='main' />
        <div className={style.aboutMe}>
          <div className={style.greeting}>
            <p>Hi there!</p>
            <h3>I am Alesia Haidukevich.</h3>
            <h4>Frontend developer</h4>
            <p>I'm responsible, motivated, easy-to-learn React Frontend Developer open to work now.</p>
            <p>I like programming because it's interesting for me to create something, to make user interface alive and friendly.
          I like to study and make my code better, also I like to share experience and learn from other developers.</p>
          </div>
          <div className={style.photoContainer}>
            <img src={Photo} />
          </div>
        </div>

        <div className={style.contacts}>
          <h4>
            CONTACT ME
          </h4>
          <Links />
        </div>

      </div>
    </div>
  );
}

export default Main;