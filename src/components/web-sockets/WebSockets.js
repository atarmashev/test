import React from 'react';
import {Root, Button} from './Websockets.styled';

/**
 * Страница с web сокетами
 * 
 * Задание было такое:
 * 
 * 6. Реализуйте получение JSON данных с помощью web sockets 
 * (JSON любой, вывод данных консоль/DOM, сервер локальный)
 */
export function WebSockets() {
    let webSocket = null;
    /**
     * Включает соединение
     */
    const activate = () => {
        if (webSocket) {
            webSocket.close();
        }

        webSocket = new WebSocket('ws://localhost:8080/api');
        webSocket.onmessage = event => {
            // здесь можно вытащить JSON тз ответа
            console.log(`Получены данные ${event.data}`);
        };
        webSocket.onerror = () => {
            console.error(`Ошибка запроса`);
        };
    };

    return (
        <Root>
            Эта кнопка включает web socket соединение с сервером по адресу localhost:8080.
            Вывод данных в консоль.
            <Button onClick={activate}>Включить/Перезапустить</Button>
        </Root>
    );
}