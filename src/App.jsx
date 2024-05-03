import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";

function App() {
  return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.contentAbout}>
              <h1 className={styles.nameOfTask}>Автоматизированная база знаний закупок</h1>
              <div className={styles.textDecoration}>
                Решение использует передовые методы LLM
                для решения задач поиска и анализа правовой
                и практической информации по закупкам, проводимым
                в рамках <a href="https://www.consultant.ru/document/cons_doc_LAW_144624/" target="_blank">44-ФЗ</a> и <a href="https://www.consultant.ru/document/cons_doc_LAW_116964/" target="_blank">223-ФЗ</a>.
              </div>
              <h1 className={styles.advertisement}>Актуальность</h1>
              <div className={styles.textDecoration}>
                <div className={styles.actuality}>
                  <div className={styles.blockActuality}>
                    Удобная система получения ответов
                    на вопросы по 223-ФЗ и 44-ФЗ сейчас <a href="https://rg.ru/2023/10/13/eksperty-po-itogam-tretego-kvartala-goszakupki-umenshilis-bolshe-chem-na-tret.html?ysclid=lue8c0x5qr95482839" target="_blank">актуальна</a>,
                    можно наблюдать сильную <span className={styles.span}>просадку торгов</span> для СМП
                    по 44-ФЗ <span className={styles.span}>на 6%</span>, а рост МСП по 223-ФЗ имеет незначительный
                    рост. Многие малые игроки не могут зайти на рынок закупок
                    т.к он им не понятен и сложен, а стоимость специализированных услуг
                    высока для субъектов малого предпринимательства.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ImgPrec}>
              <img src={'Hack.png'} width="400px" height="400px" />
              <div className={styles.textDecoration}>
                <div className={styles.blockActuality}>
                  Государство заинтересовано в развитии
                  участия малого и среднего бизнеса в контрактах
                  по 44-ФЗ и 223-ФЗ, чтобы улучшить конкурентные условия,
                  которые способствуют развитию экономики и общества.
                  Нарушения из-за отсутствия знаний в этой области могут привести к
                  <a href="https://fas.gov.ru/publications/22659"> проверкам ФАС</a>, а также дополнительным издержкам, которые составляют
                  <a href="https://iq.hse.ru/news/177671132.html"> 3.5%-4% от объема.</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;