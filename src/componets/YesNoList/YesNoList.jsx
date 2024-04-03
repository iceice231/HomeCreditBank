import React from 'react';
import styles from './YesNoList.module.css'
import YesNoItem from "./YesNoItem";

const YesNoList = () => {
    const ListYes = [
        {id:1, title: 'Понятно', text: 'Пишем легко, коротко и структурно, \n объясняем каждый призыв \n к действию - какую пользу получат \n коллеги'},
        {id:2 , title: 'Полезно', text: 'Отправляем сообщения \n в подходящие каналы коммуникаций только с нужной информацией'},
        {id:3, title: 'Искренне', text: 'Не прикрываем креативными \n и громкими словами реальность'},
        {id:4, title: 'Современно', text: 'Уместно шутим и говорим на языке целевой аудитории'}
    ]

    const ListNo = [
        {id:1, title: 'Агитационно', text: 'Пишем не письмо, а простыню. \n Смысл прячем в пятом абзаце,\n первые четыре составляем \n из «ASAP ПРИХОДИ БУДЕТ ИНТЕРЕСНО»'},
        {id:2, title: 'Навязчиво', text: 'Отправляем одно и то же сообщение \n каждый день во все каналы - ведь \n первые сто раз коллеги просто \n пропустили, верно?. .'},
        {id:3 , title: 'Формально', text: 'Общаемся на канцелярите \n или в заискивающем тоне: \n «Уважаемые коллеги, Вы - супер, \n с Уважением к Вашей работе. . .»'},
        {id:4, title: 'Слащаво/Странно', text: 'Используем мемы из 2009,  яркие, \n но бессмысленные прилагательные \n и уменьшительно - ласкательные существительные: «крутые проекты», «заявочка»'}
    ]
    return (
        <div className={styles.list}>
            <div className={styles.list_yes}>
                <span className={styles.list_title}>Так надо</span>
                <div className={styles.list_item_yes}>
                    {ListYes.map(YesItem => {
                        return <YesNoItem key = {YesItem.id} title = {YesItem.title} text = {YesItem.text}/>
                    })}
                </div>
            </div>
            <div className={styles.list_no}>
                <span className={styles.list_title}>Так <span>НЕ</span> надо</span>
                <div className={styles.list_item_no}>
                    {ListNo.map(NoItem => {
                        return <YesNoItem key = {NoItem.id} title = {NoItem.title} text = {NoItem.text}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default YesNoList;