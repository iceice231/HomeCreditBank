import React from 'react';
import styles from './ContentAbout.module.css'

const ContentAbout = () => {
    return (
        <div>
            <div className={styles.content_about}>
                <div className={styles.about_container}>
                    <span className={styles.slogan_title}>Middle Odyssey</span>
                    <span className={styles.slogan_text}>Программа для middle-руководителей</span>
                    <button className={styles.slogan_btn}>ХОЧУ записаться!</button>
                </div>
                <div className={styles.about_container}>
                    <div className={styles.position_right}>
                        <span className={styles.what_title}>О чем?</span>
                        <span className={styles.what_text}>
                                        Современность диктует новые правила, нам ежедневно
                                        приходится реагировать на изменения и принимать решения
                                    </span>
                    </div>
                </div>
                <div className={styles.about_container}>
                    <span className={styles.now_title}>Сейчас...</span>
                    <span className={styles.now_text}>
                        ...как никогда важны сильные и компетентные лидеры.
                        Для твоего развития мы открываем набор на программу
                        для middle-руководителей «Middle Odyssey lvl 1»,
                        состоящую из 5 модулей
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContentAbout;