import React, {memo} from 'react';
import styles from './assets/styles/button.module.scss'

const LeftArrow = memo(({ onClick }) => {
    return (
        <button className={styles.arrowBtn} onClick={onClick}>&#10094;</button>
    );
})

export default LeftArrow;
