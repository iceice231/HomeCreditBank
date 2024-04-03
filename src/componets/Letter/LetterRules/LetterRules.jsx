import React from 'react';
import LetterPlane from '../../../assets/images/main 2/LetterPlane.svg'
import LetterItem from "./LetterItem";
import styles from './LetterRules.module.css'

const LetterRules = () => {
    const letterItems = [
        {id:1, text: 'сформулируй короткую, но емкую тему'},
        {id:2, text: 'не пиши в теме “СРОЧНО!!!” и “ВАЖНО!!!!”'},
        {id:3, text: 'не пиши коллегам с личной почты, особенно superman3000@mail.ru'},
        {id:4, text: 'помести основную мысль в начале письма, \n а детали ближе к концу'},
        {id:5, text: 'не используй CAPS LOCK '},
        {id:6, text: 'адаптируй текст под мобильный формат, \n не пиши во всю ширину страницы'}
    ]
    return (
        <div className={styles.letter}>
            <span className={styles.title}>Как написать правильное письмо</span>
            <div className={styles.content}>
                <ul className={styles.letter_list}>
                    {letterItems.map(letterItem => {
                        return <LetterItem key={letterItem.id} text = {letterItem.text}/>
                    })}
                </ul>
                <img className={styles.letter_img} src={LetterPlane} alt=""/>
            </div>
        </div>
    );
};

export default LetterRules;