import React, {useState} from 'react';
import Logo from '../../assets/images/header/Logo.svg'
import Search from '../../assets/images/header/Search.svg'
import Photo from '../../assets/images/header/photo.svg'
import LogoMobile from '../../assets/images/header/LogoMobile.svg'

import  styles from './Header.module.css'
import '../../assets/fonts/fonts.module.css'
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
    const [isActive, setActive] = useState(false);
    return (

        <div className={!isActive ? styles.headerHidden : styles.headerActive}>
            <a href="#" className={styles.header_logo}>
                <img className={styles.logo_img} src={Logo} alt=""/>
                <img className={styles.logo_mobile_img} src={LogoMobile} alt=""/>
            </a>
            <div className={styles.header_search}>
                <input className={styles.search_input} type="search" placeholder="Поиск по всему..."/>
                <button type="submit" className={styles.search_btn}><img src={Search} alt=""/></button>
            </div>
            <div className={styles.header_person}>
                <img className={styles.person_img} src={Photo} alt=""/>
                <div className={styles.person_info}>
                    <div>Антон Волков</div>
                    <div className={styles.person_position}>Руководитель департамента</div>
                </div>
            </div>
            <div className={styles.menu_burger} onClick={() => setActive(!isActive)}>
            </div>
            <div className={!isActive ? styles.mobileHidden : styles.mobileActive}>
                <Sidebar isActive = {isActive} />
            </div>
        </div>
    );
};

export default Header;