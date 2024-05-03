import React from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";



export default function Header() {

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link to={"/"} className={styles.HeadContainerTop}>Автостопом по хакатонам</Link>
                    <Link to="/try" className={styles.HeadContainer}>Попробовать решение</Link>
                    <Link to="/data" className={styles.HeadContainer}>Источники данных</Link>
                    <Link to="/system" className={styles.HeadContainer}>О системе</Link>
                </div>
            </header>
        </div>
    )
}