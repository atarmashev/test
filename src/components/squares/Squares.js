import React from 'react';
import {Root, Square} from './Squares.styled';

/**
 * Случайное чило от 0 до max
 * @param {number} max 
 */
function randomInteger(max) {
    return Math.floor(10000000 * Math.random()) % max;
}
/**
 * Генерирует случайный цвет для квадрата
 */
function generateRandomColor() {
    const red = randomInteger(256);
    const green = randomInteger(256);
    const blue = randomInteger(256);

    return `rgb(${red}, ${green}, ${blue})`;
}
/**
 * Страница с квадратами
 * 
 * Задание было такое:
 * 
 * 9. С помощью цикла вывести случайное число (от 10 до 100 ) ,разноцветных
 * квадратиков. На HTML страницу ( исполнять код желательно на JS )
 */
export function Squares() {
    const backgroundColors = Array
        .from(
            { 
                length: 10 + randomInteger(91) 
            },
            () => generateRandomColor()
        );

    return (
        <Root>
            {backgroundColors.map((backgroundColor, index) => (
                <Square backgroundColor={backgroundColor} key={index} />
            ))}
        </Root>
    );
}