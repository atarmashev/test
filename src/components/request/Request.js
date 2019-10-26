import React from 'react';
import {Root, Button, ListOfTasks, TaskContainer, TaskText, DeleteTask} from './Request.styled';
import {useState, useEffect} from 'react';
import {fetchAllTasks, deleteTask, editTask} from './Request.api';

/**
 * Страница с запросами функцией. Обращается к бэку, который находится в другом проекте
 * 
 * Задание было такое:
 * 
 * 5. Реализуйте получение JSON данных с помощью XMLHttpRequst
 * (JSON любой, вывод данных консоль/DOM, сервер локальный, fetch будет плюсом)
 */
export function Request() {
    const [xhrResult, setXhrResult] = useState('Пока не было запроса');
    const [tasks, setTasks] = useState([
        { id: -3, name: 'Задание 1', text: 'Если вы это видите, значит запрос на сервер не прошёл'},
        { id: -2, name: 'Задание 2', text: 'Скорее всего, запрос не прошёл из-за CORS'},
        { id: -1, name: 'Задание 3', text: 'Убедитесь, что сервер работает по адресу localhost:8080'},
    ]);

    useEffect(() => {
        // получение всех задач
        fetchAllTasks().then(data => setTasks(data));
    }, []);

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
        xhr.open('GET', 'http://localhost:8080/all');
        xhr.send();
    };

    const onDeleteTask = id => {
        return () => {
            deleteTask(id).then(() => {
                console.log('Удаление');
                // повторное получение всех задач
                fetchAllTasks().then(data => setTasks(data));
            });
        };
    }
    const onTextChange = task => {
        return event => {
            task.text = event.target.value;
            // отправляем изменения на сервер
            editTask(task);
        }
    };

    return (
        <Root>
            Эта страница посылает запросы на сервер по адресу localhost:8080
            <Button onClick={makeXHRRequest}>xhr запрос</Button>
            {xhrResult}
            <br/>
            Далее идёт список задач для из задания на backend
            <ListOfTasks>
                {tasks.map(task => (
                    <TaskContainer key={task.id}>
                        {task.name}
                        <TaskText defaultValue={task.text} onChange={onTextChange} />
                        <DeleteTask onClick={onDeleteTask(task.id)}>Удалить</DeleteTask>
                    </TaskContainer>
                ))}
            </ListOfTasks>
        </Root>
    );
}