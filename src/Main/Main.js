import React from 'react'
import Particles from 'react-particles-js'
import ReactTypingEffect from 'react-typing-effect';

import Title from '../common/components/Title/Title'
import Links from '../common/components/Links/Links';

import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'

import Photo from '../assets/image/Photo.png'


const particlesOpt = {
  'particles': {
    'number': {
      'value': 150,
      'density': {
        'enable': true,
        'value_area': 1200
      }
    }
  }
}

function Main() {
  return (
    <div className={style.mainBlock}>
      <Particles className={style.particles} params={particlesOpt} />
      <div className={`${styleContainer.container} ${style.mainContainer} `}>
        <Title title='main' />
        <div className={style.aboutMe}>
          <div className={style.greeting}>
            <p>Hi there!</p>
            <h2>
              <ReactTypingEffect
                text={"I am Alesia Haidukevich."} />
            </h2>
            <h3>Frontend developer</h3>
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