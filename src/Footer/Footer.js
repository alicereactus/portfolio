import React from 'react'

import style from './Footer.module.css';


function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <h2>Alesia Haidukevich</h2>
                <div className={style.squaresContainer}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span>© 2020 Все права защищены</span>
            </div>
        </footer>
    );
}

export default Footer;