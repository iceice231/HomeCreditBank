import React from 'react';
import styles from './ContentForYou.module.css'

const ContentForYou = () => {
    return (
        <div className={styles.content}>
            <span className={styles.title}>Это программа для тебя, если ты:</span>
            <ul>
                <li>middle -руководитель</li>
                <li>
                    получил подтверждение необходимости обучения от своего
                    руководителя, HR BP или HR D
                </li>
                <li>сможешь совмещать обучение с рабочими задачами</li>
            </ul>
        </div>
    );
};

export default ContentForYou;