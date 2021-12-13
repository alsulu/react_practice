import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './card.module.scss';


const Card = (props) => {
    const color = classnames({
        [styles.unlimited300]: props.price === 300,
        [styles.unlimited450]: props.price === 450,
        [styles.unlimited550]: props.price === 550,
        [styles.unlimited1000]: props.price === 1000
    })
    const [select, setSelected] = useState(false);
    const handleSelect = () => {
        setSelected(!select)
    }
    let buttons = document.getElementsByClassName(`${styles.button}`);
    const [buttonSelect, setClick] = useState(false);
    const handleClick = () => {
        setClick(!buttonSelect);
        for (let i = 0; i < buttons.length; i++)
            buttons[i].disabled = !buttonSelect;
    }
    return (
        <div className={classnames(styles.card, ((select | buttonSelect) && styles.selected))} onMouseOver={handleSelect} onMouseOut={handleSelect}>
            <div className={classnames(styles.name, color)}><p>Безлимитный {props.price}</p></div>
            <div className={classnames(styles.price, color)}><p><span className={styles.rubles}>руб</span> {props.price} <span className={styles.month}>/мес</span></p></div>
            <div className={styles.speed}><p>до {props.speed} Мбит/сек</p></div>
            <div className={styles.traffic}><p>{props.traffic}</p></div>
            {buttonSelect
                ? <button className={styles.buttonCancel} onClick={handleClick}>Отменить</button>
                : <button className={styles.button} onClick={handleClick} disabled={buttonSelect}>
                    Выбрать тариф
                </button>
            }
        </div>
    );
}

export default Card;
