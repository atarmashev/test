import React from 'react';
import {Root, Button} from './Request.styled';
import {useState} from 'react';

/**
 * Страница с запросами функцией
 * 
 * Задание было такое:
 * 
 * 5. Реализуйте получение JSON данных с помощью XMLHttpRequst
 * (JSON любой, вывод данных консоль/DOM, сервер локальный, fetch будет плюсом)
 */
export function Request() {
    const [xhrResult, setXhrResult] = useState('Пока не было запроса');
    const [fecthResult, setFetchResult] = useState('Пока не было запроса');
    /**
     * xhr запрос
     */
    const makeXHRRequest = () => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener(
            'load', 
            () => {
                if(xhr.readyState === 4 && xhr.status === 200) {
                    // здесь можно вытащить JSON тз ответа
                    setXhrResult(`Запрос успешен. Получены данные ${xhr.responseText}`);
                }
            }
        );
        xhr.onerror = () => {
            setXhrResult('Ошибка запроса');
        };
        xhr.open('GET', 'http://localhost:8080/api');
        xhr.send();
    };
    /**
     * Fetch запрос
     */
    const makeFetchRequest = () => {
        fetch('http://localhost:8080/api')
            .catch(error => {
                setFetchResult('Ошибка запроса');
            })
            .then(resp => resp.json())
            .then(resp => {
                setFetchResult(`Запрос успешен. Получены данные ${JSON.stringify(resp)}`);
            });
    }

    return (
        <Root>
            Эта страница посылает запрос на сервер по адресу localhost:8080
            <Button onClick={makeXHRRequest}>xhr запрос</Button>
            {xhrResult}
            <Button onClick={makeFetchRequest}>fetch запрос</Button>
            {fecthResult}
        </Root>
    );
}