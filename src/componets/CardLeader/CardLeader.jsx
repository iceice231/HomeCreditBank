import React from 'react';
import styles from "./CardLeader.module.css";
import Planes from "../../assets/images/main 2/planes.svg";

const CardLeader = () => {
    return (
        <div>
            <div className={styles.card_leader}>
                <span className={styles.card_leader_title}>Правила лидера</span>
                <span className={styles.card_leader_text}>
                        практики коммуникации с распределенными командами,
                        стань внимательным и чуткимлидером
                    </span>
                <button className={styles.card_leader_btn}>Подробнее</button>
                <img className={styles.card_leader_img} src={Planes} alt=""/>
            </div>
        </div>
    );
};

export default CardLeader;