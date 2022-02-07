import styles from './assets/styles/title.module.scss'

const Title = (props) => {
    return (
        <h2 className={styles.title}>{props.title}</h2>
    );
}

export default Title;
