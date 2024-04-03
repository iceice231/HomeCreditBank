import React from 'react';
import styles from './YesNoItem.module.css'



const YesNoItem = (props) => {
    const {title, text} = props
    return (
        <div className={styles.items}>
            <span className={styles.title}>{title}</span>
            <span className={styles.text}>{text}</span>
        </div>
    );
};

export default YesNoItem;