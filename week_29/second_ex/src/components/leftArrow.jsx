import styles from './assets/styles/button.module.scss'

const LeftArrow = ({ onClick }) => {
    return (
        <button className={styles.arrowBtn} onClick={onClick}>&#10094;</button>
    );
}

export default LeftArrow;
