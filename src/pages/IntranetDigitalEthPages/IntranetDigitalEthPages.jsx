import React from 'react';

import styles from './IntranetDigitalEthPages.module.css'
import Header from "../../componets/Header/Header";
import Sidebar from "../../componets/Sidebar/Sidebar";
import LetterRules from "../../componets/Letter/LetterRules/LetterRules";
import YesNoList from "../../componets/YesNoList/YesNoList";
import  '../../assets/fonts/fonts.module.css'
import LetterMeet from "../../componets/Letter/LetterMeet/LetterMeet";
import LeadUpBox from "../../componets/LeadUpBox/LeadUpBox";
import Banner from "../../componets/Banner/Banner";
import CardLeader from "../../componets/CardLeader/CardLeader";

const IntranetDigitalEthPages = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.center}>
                <Sidebar/>
                <div className={styles.main}>
                    <Banner/>
                    <LetterRules/>
                    <YesNoList/>
                    <LetterMeet/>
                    <LeadUpBox/>
                </div>
                <CardLeader/>
            </div>
        </div>
    );
};

export default IntranetDigitalEthPages;