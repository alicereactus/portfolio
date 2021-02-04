import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Nav.module.scss';

function Nav() {
  return (
    <div className={style.nav}>
      <NavLink to='/main'>Main</NavLink>
      <NavLink to='/skills'>Skills</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      {/* <a href='#'>Contacts</a> */}
    </div>
  );
}

export default Nav;