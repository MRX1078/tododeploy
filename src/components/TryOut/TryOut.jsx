import React, { useState} from 'react';
import styles from './TryOut.module.css';
import Header from "../Header/Header";
import axios from "axios";

const TryOut = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isResponse, setIsResponse] = useState(false);

    const handleChange = (e) => {
        setMessage(e.target.value);
        setIsResponse(false)
        if (e.key === "Enter") {
            console.log("HelloChalled");
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const response =
                await axios.get("https://188.124.37.121.sslip.io/api/v1/ml/get_answer",{headers: {'Content-Type': 'application/json'}, params: {question: message}});
            setResponse(response.data)
            setIsLoading(false)
            setIsResponse(true)
        } catch (err) {
            console.log(err);
            setIsLoading(false)
        }
    }


    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.yourAnswer}>Введите ваш запрос по закупкам 223-ФЗ или 44-ФЗ</div>
                {isResponse ? (
                    <div className={styles.response}>
                        <span className={styles.span}>Ваш вопрос:</span> {message}
                        <span className={styles.span}>Ответ:</span> {response.result_answer}
                        <span className={styles.span}>Название статьи:</span> {response.article_name}
                        <span className={styles.span}>Закон:</span> {response.rule_name}
                        <span className={styles.span}>Уверенность в ответе:</span> {response.metric}
                    </div>) : ""}
                <div className={styles.inputContainer}>
                    <input className={styles.input}
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        form="message-form"
                           placeholder="Введите ваш запрос"
                    />
                    <button className={styles.button} type="submit" onClick={handleSubmit}/>
                </div>
            </main>
        </div>
    )
}

export default TryOut;