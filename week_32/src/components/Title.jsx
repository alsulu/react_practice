import React, { memo } from 'react';
import styles from './assets/styles/title.module.scss'

const Title = memo((props) => {
    return (
        <h1 className={styles.title}>{props.title}</h1>
    );
})

export default Title;
