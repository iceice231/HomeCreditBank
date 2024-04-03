import React from 'react';
import styles from './CardContent.module.css'
import '../../assets/fonts/fonts.module.css'

const CardContent = (props) => {

    const {title, text, imgIcon} = props
    return (
        <div className={styles.cards_box}>
            <span className={styles.title}>{title}</span>
            <span className={styles.text}>{text}</span>
            <a className={styles.link} href="#"><span>Подробнее</span><img src={imgIcon} alt=""/></a>
        </div>
    );
};

export default CardContent;