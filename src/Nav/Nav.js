import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

import style from './Nav.module.scss';

function Nav() {
  return (
    <div className={style.nav}>
      <a href='#mainBlock'>Main</a>
      <a href='#skillsBlock'>Skills</a>
      <a href='#projectsBlock'>Projects</a>
    </div>
  );
}

export default Nav;