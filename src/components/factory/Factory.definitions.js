/**
 * Абстрактный класс для пользователей
 */
class User {

    constructor(name, password) {
        this.username = name;
        this.password = password;
    }

}
/**
 * Обычный пользователь
 */
export class NormalUser extends User {

    constructor(name, password) {
        super(name, password);
        // случайное число
        this.profileId = Date.now() % 1000000;
    }

    sayHello() {
        return `Привет, я - обычный пользователь! Мой профиль: ${this.profileId}.`;
    }

}
/**
 * Администратор
 */
export class Admin extends User {

    constructor(name, password) {
        super(name, password);
        this.token = '12b34df43c21e'; 
    }

    sayHello() {
        return `Привет, я - администратор! Мой токен: ${this.token}.`;
    }

}