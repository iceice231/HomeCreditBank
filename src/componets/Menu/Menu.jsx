import React from 'react';

import styles from './Menu.module.css'
import Sidebar from "../Sidebar/Sidebar";
import Search from "../../assets/images/header/Search.svg";
import Photo from "../../assets/images/header/photo.svg";


const Menu = (active, setActive) => {
    return (
        <div className={active ? 'menu active': 'menu_content'}>
            <Sidebar/>
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
        </div>
    );
};

export default Menu;