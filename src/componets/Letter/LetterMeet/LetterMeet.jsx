import React from 'react';
import styles from './LetterMeet.module.css'
import LetterItem from "../LetterRules/LetterItem";
import Plane from '../../../assets/images/main 2/planeCard2.svg'


const LetterMeet = () => {
    const letterItems = [
        {id:1, text: 'сформулируй повестку и направь ее коллегам'},
        {id:2, text: 'прикрепи необходимые файлы'},
        {id:3, text: 'укажи время начала и окончания встречи'},
        {id:4, text: 'не ставь встречи одну на другую, дай коллегам отдохнуть '},
        {id:5, text: 'выбери участников и проверь их календари'}
    ]
    return (
        <div className={styles.letter}>
            <span className={styles.title}>Как правильно создать встречу</span>
            <div className={styles.letter_content}>
                {letterItems.map(letterItem => {
                    return <LetterItem key={letterItem.id} text = {letterItem.text}/>
                })}
                <button className={styles.letter_btn}>Отправляй приглашение</button>
                <img className={styles.letter_img} src={Plane} alt=""/>
            </div>
        </div>
    );
};

export default LetterMeet;