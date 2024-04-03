import React from 'react';
import IconHomeLetter from '../../assets/images/sideBar/IconHomeletter.svg'
import IconStaging from '../../assets/images/sideBar/Icon-staging.svg'
import IconListUl from '../../assets/images/sideBar/Icon-list-ul.svg'
import IconBooks from '../../assets/images/sideBar/Icon-books.svg'
import IconBoxContainer from '../../assets/images/sideBar/Icon-box-container.svg'
import IconBellOn from '../../assets/images/sideBar/Icon-bell-on.svg'
import IconUsers from '../../assets/images/sideBar/Icon-users.svg'

import styles from './Sidebar.module.css';
import NavLink from './NavLink'
import Barcode from "./Barcode";


const Sidebar = ({isActive}) => {
    const navLinks = [
        {id:1, title: 'Интернет портал', imgIcon: IconHomeLetter},
        {id:2, title: 'Управление обучением', imgIcon: IconStaging},
        {id:3, title: 'Расписание тренера', imgIcon: IconListUl},
        {id: 4, title: 'Дистанционные курсы', imgIcon: IconBooks},
        {id:5, title: 'Карты развития', imgIcon: IconBoxContainer},
        {id:6, title: 'Обучающие мероприятия', imgIcon: IconBellOn},
        {id:7, title: 'Тренерский состав', imgIcon: IconUsers}
    ]

    return (
        <div className={!isActive ? styles.sideBarHidden : styles.sideBarActive}>
            <div className={styles.sideBar_nav}>
                {navLinks.map(link => {
                    return <NavLink key={link.id} imgIcon={link.imgIcon} title={link.title}/>
                })}
            </div>
            <Barcode/>
        </div>
    );
};

export default Sidebar;