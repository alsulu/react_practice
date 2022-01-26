import React from 'react';
import Title from './title';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';
import styles from './assets/styles/card_cont.module.scss';

const CardCont = ({ children, onClickPrev, onClickNext, how, many }) => {
    return (
        <div className={styles.cards_container} id="cards">
            <Title title="Карточки" />
            <div className={styles.card}>
                <LeftArrow onClick={onClickPrev} />
                {children}
                <RightArrow onClick={onClickNext} />
            </div>
            <span>{how} / {many}</span>
        </div>
    );
}

export default CardCont;
