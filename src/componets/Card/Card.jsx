import React from 'react';
import IconCardLeader from '../../assets/images/main/Card/IconCard1.svg'
import IconDesignThinking from '../../assets/images/main/Card/IconCard3.svg'
import IconFinancial from '../../assets/images/main/Card/IconCard2.svg'
import IconRenewTeam from '../../assets/images/main/Card/IconCard5.svg'
import IconSystemThinking from '../../assets/images/main/Card/IconCard4.svg'

import styles from './Crad.module.css'
import CardContent from "./CardContent";

const Card = () => {
    const cards = [
        {id:1, title:'Я лидер',text:'Развитие лидерского мышления и управления своей эффективностью', imgIcon: IconCardLeader},
        {id:2, title: 'Финансы и банкинг', text: 'Финансовые модели, отчетности и их верная трактовка', imgIcon: IconFinancial},
        {id:3, title: 'Дизайн мышление', text: 'Создание продуктов и процессов, ориентированныхна клиента', imgIcon: IconDesignThinking},
        {id:4, title: 'Системное мышление при принятии решений', text: 'Мышление и принятии решений без когнитивных ошибок', imgIcon: IconSystemThinking},
        {id:5, title: 'Управление в стиле коучинг', text: 'Развитие своей команды для новых достижений', imgIcon: IconRenewTeam}
    ]
    return (
        <div className={styles.card_box}>
            {cards.map(card => {
                return <CardContent key = {card.id} title={card.title} text={card.text} imgIcon={card.imgIcon}/>
            })}
        </div>
    );
};

export default Card;