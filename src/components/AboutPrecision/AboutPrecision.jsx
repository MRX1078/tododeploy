import Header from "../Header/Header";
import React from "react";
import styles from "./AboutPrecision.module.css";
export default function AboutPrecision() {

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.mainBody}>
                    Наше решение базируется на ансамбле моделей, ключевая мысль - <br/>
                    <span className={styles.span}> Garbage In - Garbage Out</span>
                    <br/>
                    Качество данных сильно коррелирует с качеством ответа, поэтому была
                    проделана работа по их предобработке.
                    <br/>
                    <br/>
                    Общая архитектура нашего решения выглядит следующим образом:
                    <img className={styles.img} src={'Diagramm.png'} width="700px"/>
                    <br/>
                    <br/>
                    <span className={styles.span2}>В основе лежит две модели:</span>
                    <br/>
                    <img className={styles.img} src={'Annoy.png'} width="700px"/>
                    <br/>
                    У модели Annoy есть ряд преимуществ в быстром поиске:
                    <br/>
                    1. Косинусное расстояние эквивалентно евклидову расстоянию между нормализованными векторами =
                    sqrt(2-2*cos(u, v)).
                    <br/>
                    <br/>
                    2. Работает лучше с небольшими объемами данных, но и показывает отличные результатыт от 1000+
                    <br/>
                    <br/>
                    3. Использует небольшое количество памяти
                    <br/>
                    <br/>
                    4. Создание индекса отделено от поиска
                    <br/>
                    <img className={styles.img} src={'Tiny.png'} width="700px"/>
                    <br />
                    У модели TinyLlama есть ряд преимуществ в быстром поиске:
                    <br/>
                    1. Легковесная и подходит для небольших проектов
                    <br/>
                    <br/>
                    2. Русскоязычная модель, которую можно использовать в коммерческих целях
                    <br/>
                    <br/>
                </div>
            </main>
        </div>
    )
}