import React from 'react';
import {Root} from './Factory.styled';
import {NormalUser, Admin} from './Factory.definitions';

/**
 * Фабричная функция для создания пользователя
 * @param {boolean} isAdmin 
 */
function createUser(isAdmin) {
    if (isAdmin) {
        return new Admin('admin', '6b7f3ujcew');
    } else {
        return new NormalUser('user', 'cwftggyu');
    }
}
/**
 * Страница с фабричной функцией
 * 
 * Задание было такое:
 * 
 * 4. Реализуйте паттерн 'фабрика'(User) в нотификации ES6.
 * 
 */
export function Factory() {
    const user = createUser(false);
    const admin = createUser(true);

    return (
        <Root>
            Эта страница создаёт 2 пользователей с помощью фабричной функции:
            <br/>
            {user.sayHello()}
            <br/>
            {admin.sayHello()}
        </Root>
    );
}