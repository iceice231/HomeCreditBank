import React from 'react';
import styles from './LeadUpBox.module.css'

import bgIcon from '../../assets/images/main 2/bgIcon.svg'
import webcamIcon from '../../assets/images/main 2/webcamIcon.svg'
import recIcon from '../../assets/images/main 2/recIcon.svg'
import silenceIcon from '../../assets/images/main 2/silencceIcon.svg'
import mobileIcon from '../../assets/images/main 2/mobileIcon.svg'
import timerIcon from '../../assets/images/main 2/timerIcon.svg'
import Plane from '../../assets/images/main 2/planeLeadUp.svg'
import LeadUpItem from "./LeadUpItem";

const LeadUpBox = () => {
    const leadUpItems = [
        {id:1, text: 'установи неброский \n фон в строгих тонах \n или включи размытие', imgIcon: bgIcon},
        {id:2, text: 'держи камеру включенной \n на уровне глаз, это приятнее \n чем общаться с аватаркой', imgIcon: webcamIcon},
        {id:3, text: 'предупреди, если ведешь \n запись участники встречи \n должны знать, что их \n записывают', imgIcon: recIcon},
        {id:4, text: 'найди тихое место \n в квартире или уютную \n переговорку в офисе', imgIcon: silenceIcon},
        {id:5, text: 'поставь телефон \n на беззвучный режим', imgIcon: mobileIcon},
        {id:6, text: 'будь пунктуальным, \n подключайся вовремя', imgIcon: timerIcon}
    ]
    return (
        <div className={styles.leadup_box}>
            <span className={styles.title}>Как подготовиться к встрече онлайн</span>
            <div className={styles.leadup_content}>
                {leadUpItems.map(leadUpItem => {
                  return  <LeadUpItem key = {leadUpItem.id} text = {leadUpItem.text} imgIcon = {leadUpItem.imgIcon}/>
                })}
                <img className={styles.leadup_img} src={Plane} alt=""/>
            </div>
        </div>
    );
};

export default LeadUpBox;