import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./assets/styles/header.module.scss";
import logo from "./assets/images/logo.png";

const Header = memo(() => {
  return (
    <nav className={styles.header}>
      <div className={styles.cont}>
        <div>
          <Link to="/" className={styles.logo}><img src={logo} alt="logo" /></Link>
          <p className={styles.title}>Изучайте английский по карточкам вместе с нами!</p>
        </div>
        <Link to="/" className={styles.link}>Список слов</Link>
        <Link to="/game" className={styles.link}>Карточки</Link>
      </div>
    </nav>
  );
})

export default Header;
