import React, { memo } from 'react';
import styles from './assets/styles/title.module.scss'
import classnames from 'classnames';

const Title = memo(({ className, title }) => {
    return (
        <h1 className={classnames(styles.title, className)}>{title}</h1>
    );
})

export default Title;
