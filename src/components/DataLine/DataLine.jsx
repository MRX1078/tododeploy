import styles from "./DataLine.module.css"
import React from "react";
import Header from "../Header/Header";

export default function DataLine() {

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.boxData}>
                    <div className={styles.boxLeft}>
                        <div className={styles.boxDataPrep}>
                            Важным этапом по работе с данными, является их предобработка и в нашем случае мы применили следующие подходы:
                            <ol className={styles.spisok}>
                                <li className={styles.spisochek}>Удаление дубликатов данных</li>
                                <li className={styles.spisochek}>Удаление сомнительных данных и данных затычек</li>
                                <li className={styles.spisochek}>Удаление лишних символов</li>
                                <li className={styles.spisochek}>Сохранение метаданных номера закона, страницы и раздела</li>
                            </ol>
                            Таким образом, мы добиваемся ключевой
                            чистоты данных, которые улучшают качество
                            наших ответов.
                        </div>
                    </div>
                    <div className={styles.boxRight}>
                        <div className={styles.boxDataSource}>
                            Источники данных:
                            <ol className={styles.spisok}>
                                <li className={styles.spisochek}><a href='http://www.tendery.ru/'
                                                                    target="_blank">Тендеры.ру</a></li>
                                <li className={styles.spisochek}><a href='https://www.consultant.ru/'
                                                                    target="_blank">КонсультантПлюс</a></li>
                                <li className={styles.spisochek}><a
                                    href='https://zakupki.gov.ru/epz/main/public/document/view.html?sectionId=907'
                                    target="_blank">ЕИС Закупки</a></li>
                                <li className={styles.spisochek}><a
                                    href='https://drive.google.com/drive/folders/1Ksx_q19zw6HKgRdS5S2Z6ueeLat2KuOx'
                                    target="_blank">Методичка РосЭлТорг</a></li>
                                <li className={styles.spisochek}><a
                                    href='https://sbis.ru/articles/tenders/nacrezhim_v_zakupkah_po_44fz?ysclid=ltqsgh6c5u48963753'
                                    target="_blank">СбисЖурнал</a></li>
                                <li className={styles.spisochek}><a
                                    href='https://t.me/regulation_44fz'
                                    target="_blank">Регулятор Закупок</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}