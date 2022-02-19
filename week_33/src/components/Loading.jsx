import React, { memo } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styles from './assets/styles/loading.module.scss';

const Loading = memo(() => {
    return (
        <div className={styles.loading_container}>
            <h2 className={styles.loading_title}>Загрузка страницы</h2>
            <p className={styles.loading_text}>Пожалуйста, подождите..</p>
            <ClimbingBoxLoader size={32} speedMultiplier={0.6} color='#30292D' />
        </div>
    )
})

export default Loading;