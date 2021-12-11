import styles from './assets/styles/header.module.scss';


const Header = () => {
    return (
        <nav className={styles.header}>
            <div>
                <p>Изучайте английский по карточкам вместе с нами!</p>
                <p><a href="#list">Список слов</a></p>
                <p><a href="#cards">Карточки</a></p>
            </div>
        </nav>
    );
}

export default Header;
