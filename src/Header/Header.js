import React from 'react'

import style from './Header.module.scss';

import Nav from '../Nav/Nav';

function Header() {
  return (
    <header className={style.header}>
      <Nav />
    </header>
  );
}

export default Header;