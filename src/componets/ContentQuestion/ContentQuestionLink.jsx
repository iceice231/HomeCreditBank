import React from 'react';
import IconOutlock from "../../assets/images/main/socialOut.svg";
import IconTeams from "../../assets/images/main/socialTeams.svg";
import styles from "./ContentQuestionLink.module.css";
const ContentQuestionLink = (props) => {
    const {imgPhoto} = props
    return (
        <div>
            <img src={imgPhoto} alt=""/>
            <div className={styles.people_item}>
                <a href="#"><img src={IconOutlock} alt=""/></a>
                <a href="#"><img src={IconTeams} alt=""/></a>
            </div>
        </div>
    );
};

export default ContentQuestionLink;