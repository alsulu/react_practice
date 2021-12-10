import classnames from 'classnames';
import styles from './card.module.scss';


const Card = (props) => {
    const color = classnames({
        [styles.unlimited300]: props.price === 300,
        [styles.unlimited450]: props.price === 450,
        [styles.unlimited550]: props.price === 550,
        [styles.unlimited1000]: props.price === 1000
    })
    return (
        <div className={classnames(styles.card, (props.isSelected && styles.selected))}>
            <div className={classnames(styles.name, color)}><p>Безлимитный {props.price}</p></div>
            <div className={classnames(styles.price, color)}><p><span className={styles.rubles}>руб</span> {props.price} <span className={styles.month}>/мес</span></p></div>
            <div className={styles.speed}><p>до {props.speed} Мбит/сек</p></div>
            <div className={styles.traffic}><p>{props.traffic}</p></div>
        </div>
    );
}

export default Card;
