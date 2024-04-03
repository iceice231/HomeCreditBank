import React from 'react';
import styles from './LetterItem.module.css'

const LetterItem = (props) => {
    const {text} = props
    return (
        <div>
            <li>{text}</li>
        </div>
    );
};

export default LetterItem;