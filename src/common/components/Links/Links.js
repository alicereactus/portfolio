import React from 'react'

import style from './Links.module.scss';

import LinkedinImage from '../../../assets/image/linkedin.svg'
import GithubImage from '../../../assets/image/github.svg'
import TwitterImage from '../../../assets/image/twitter.svg'
import TelegramImage from '../../../assets/image/telegram.svg'

function Links () {
    return (
        <div className={style.links}>
            <a href='https://www.linkedin.com/in/alice-haidukievich-a88834192/' target='_blank'><img src={LinkedinImage} /></a>
            <a href='https://telegram.me/wolfschpic' target='_blank'><img src={TelegramImage} /></a>
            <a href='https://github.com/alicereactus' target='_blank'><img src={GithubImage} /></a>
            <a href='https://twitter.com/Alicereactus' target='_blank'><img src={TwitterImage} /></a>
        </div>
    );
}

export default Links;