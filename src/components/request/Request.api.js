
function get(path) {
    return fetch(`http://localhost:8080/${path}`, {})
        .catch(error => {
            console.error('Ошибка GET запроса', error);
        })
        .then(response => response.json());
}

function post(path, body) {
    return fetch(`http://localhost:8080/${path}`, {
        method: 'POST',
    }, { body })
    .catch(error => {
        console.error('Ошибка POST запроса', error);
    })
    .then(response => response.json());
}

function put(path, body) {
    return fetch(`http://localhost:8080/${path}`, {
        method: 'PUT',
    }, { body })
    .catch(error => {
        console.error('Ошибка PUT запроса', error);
    })
    .then(response => response.json());
}

function deleteRequest(path) {
    return fetch(`http://localhost:8080/${path}`, {
        method: 'DELETE',
    })
    .catch(error => {
        console.error('Ошибка DELETE запроса', error);
    });
}
/**
 * Получение всех задач
 */
export function fetchAllTasks() {
    return get('all')
}
/**
 * Получение одного задания. Сейчас это нигде не нужно, однако API для этого предусмотрено.
 * @param {number} id 
 */
export function fetchTask(id) {
    return get(`task?id=${id}`);
}
/**
 * Создание
 */
export function createTask() {
    return put('create', {});
}
/**
 * Редактирование
 * @param {*} task 
 */
export function editTask(task) {
    return post('edit', task);
}
/**
 * Удаление
 * @param {*} id 
 */
export function deleteTask(id) {
    return deleteRequest(`delete?id=${id}`);
}