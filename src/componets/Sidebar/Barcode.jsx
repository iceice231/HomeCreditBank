import React from 'react';
import QC from '../../assets/images/sideBar/QR.svg'
import styles from './Barcode.module.css'
import '../../assets/fonts/fonts.module.css'

const Barcode = () => {
    return (
        <div className={styles.sideBar_barcode}>
            <span className={styles.barcode_text}>
                Полезные ссылки
                и дополнительные материалы
                для новичков
            </span>
            <img className={styles.barcode_img} src={QC} alt=""/>
            <button className={styles.barcode_btn }>Подробнее</button>
        </div>
    );
};

export default Barcode;