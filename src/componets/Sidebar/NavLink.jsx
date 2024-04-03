import React from 'react';
import styles from './NavLink.module.css'
import '../../assets/fonts/fonts.module.css'

const NavLink = (props) => {

    const { imgIcon, title } = props

    return (
        <div className={styles.nav_links}>
            <a className={styles.nav_link} href="#">
                <img src={imgIcon} alt=""/>
                <span>{title}</span>
            </a>
        </div>
    );
};

export default NavLink;