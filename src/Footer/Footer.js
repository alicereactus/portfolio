import React from 'react'
import Links from '../common/components/Links/Links';

import style from './Footer.module.scss';


function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div>
                    <p>Alesia</p>
                </div>
                <Links />
                <span>© 2020 Alesia Haidukevich. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;