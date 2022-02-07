import styles from './assets/styles/button.module.scss'

const RightArrow = ({ onClick }) => {
    return (
        <button className={styles.arrowBtn} onClick={onClick}>&#10095;</button>
    );
}

export default RightArrow;
