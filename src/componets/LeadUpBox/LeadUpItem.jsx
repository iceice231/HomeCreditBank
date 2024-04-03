import React from 'react';
import styles from './LeadUpItem.module.css'

const LeadUpItem = (props) => {
    const {text, imgIcon} = props
    return (
        <div className={styles.content}>
            <img src={imgIcon} alt=""/>
            <span className={styles.text}>{text}</span>
        </div>
    );
};

export default LeadUpItem;