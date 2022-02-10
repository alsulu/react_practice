import React, { memo } from "react";
import Title from "./Title";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import styles from "./assets/styles/card_cont.module.scss";

const CardCont = memo(({ children, onClickPrev, onClickNext, how, many, count }) => {
  return (
    <div className={styles.cards_container}>
      <Title title={`Карточки (количество выученных слов: ${Number(count)} из ${many})`} />
      <div className={styles.card}>
        <LeftArrow onClick={onClickPrev} />
        {children}
        <RightArrow onClick={onClickNext} />
      </div>
      <span>
        {how} / {many}
      </span>
    </div>
  );
})

export default CardCont;
