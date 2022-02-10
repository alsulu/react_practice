import React, { memo } from 'react';
import styles from './assets/styles/footer.module.scss';


const Footer = memo(() => {
    return (
        <menu className={styles.footer_container}>
            <div className={styles.footer}>
                <h4>Контакты</h4>
                <p>Свяжитесь с нами: 8999999999</p>
            </div>
        </menu>
    );
})

export default Footer;
