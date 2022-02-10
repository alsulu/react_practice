import ract, { memo } from 'react';
import styles from './assets/styles/title.module.scss'

const Title = memo((props) => {
    return (
        <h2 className={styles.title}>{props.title}</h2>
    );
})

export default Title;
