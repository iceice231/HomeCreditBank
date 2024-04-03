import React from 'react';
import styles from './ContentQuestion.module.css'
import Photo from "../../assets/images/main/photo.svg";
import ContentQuestionLink from "./ContentQuestionLink";

const ContentQuestion = () => {
    const peopleItems = [
        {id:1, imgPhoto: Photo},
        {id:2, imgPhoto: Photo}
    ]
    return (
        <div className={styles.content}>
            <span className={styles.title}>задать вопрос</span>
            <div className={styles.peopleList}>
                {peopleItems.map(peopleItem => {
                    return <ContentQuestionLink key = {peopleItem.id} imgPhoto = {peopleItem.imgPhoto}/>
                })}
            </div>
        </div>
    );
};

export default ContentQuestion;