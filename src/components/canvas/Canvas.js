import React from 'react';
import {Root} from './Canvas.styled';
import {createRef, useEffect} from 'react';

/**
 * Страница с canvas
 * 
 * Задание было такое:
 * 
 * 2. Нарисуйте на canvas основные геометрические фигуры(окружность, треугольник, квадрат, прямоугольник), 
 * расположите на холсте размером 800*600 по 4-м углам.(добавьте js анимацию фигурам - опционально/будет плюсом)
 */
export function Canvas() {
    const canvasRef = createRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        context.fillStyle = "green";
        // круг
        context.beginPath();
        context.arc(25, 25, 25, 0, 2 * Math.PI);
        context.fill();
        // треугольник
        context.beginPath();
        context.moveTo(750, 0);
        context.lineTo(800, 0);
        context.lineTo(800, 50);
        context.fill();
        // квадрат
        context.fillRect(750, 550, 50, 50);
        // прямоугольник
        context.fillRect(0, 550, 100, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Root ref={canvasRef} />;
}