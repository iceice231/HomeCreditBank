import React, {useState} from 'react';

import styles from './MiddleOdysseyPages.module.css'
import Header from "../../componets/Header/Header";
import Sidebar from '../../componets/Sidebar/Sidebar'
import Card from "../../componets/Card/Card";
import ContentAbout from "../../componets/ContentAbout/ContentAbout";
import ContentForYou from "../../componets/ContentForYou/ContentForYou";
import ContentQuestion from "../../componets/ContentQuestion/ContentQuestion";

const MiddleOdysseyPages = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.center}>
                    <Sidebar/>
                <div className={styles.main}>
                    <div className={styles.bg}>
                        <ContentAbout/>
                        <div className={styles.card_content}>
                            <Card/>
                        </div>
                    </div>
                        <div className={styles.content_end}>
                            <ContentForYou/>
                            <ContentQuestion/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MiddleOdysseyPages;