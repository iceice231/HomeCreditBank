import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div>
            <div className={styles.banner}>
                <span className={styles.title}>Цифровой <br/> этикет</span>
                <span className={styles.text}>
                    освой правила деловой коммуникации <br/> и работай продуктивно
                </span>
            </div>
        </div>
    );
};

export default Banner;