import React from 'react';
import {createRef, useState} from 'react';
import {Root, SliderContainer, SliderItem, SliderBackground} from './Slider.styled';
/**
 * Частота анимации
 */
const frequency = 25;
/**
 * Период анимации
 */
const timeDelta = 1.0 / frequency;
/**
 * Функция для создания обработчиков событий касания
 * @param {Ref} backgroundRef ссылка на элемент, который двигаем
 * @param {number} currentY текущее местоположение элемента, который двигаем
 * @param {(newTop: number) => void} setCurrentY setter для currentY
 */
function createTouchHandlers(backgroundRef, currentY, setCurrentY) {
    // для запоминания игрека точки касания
    let touchStartY = 0;
    // математическая переменная для управления анимацией
    let timeAlpha = 0;
    // обработчик начала касания
    const touchStart = ({touches}) => {
        touchStartY = touches[0].screenY;
    };
    // обработчик завершения касания
    const touchEnd = ({touches, target}) => {
        if (touchStartY !== 0 && timeAlpha === 0) {
            // сколько проехал палец
            const deltaY = touches[0].screenY - touchStartY;
            // что двигаем
            const element = backgroundRef.current;
            // нижняя граница движения
            const min = -element.clientHeight + target.clientHeight;
            // куда двигаем
            const nextY = currentY + 2.5 * deltaY;
            // куда двигаем с учётом всех ограничений
            const checkedNextY = Math.min(0, Math.max(min, nextY));
            // анимируем скриптом с помощью квадратичной функции
            const intervalId = setInterval(() => {
                if (timeAlpha < 1 && element) {
                    setCurrentY(timeAlpha**2 * checkedNextY + (1 - timeAlpha**2) * currentY);
    
                    timeAlpha += timeDelta;
                } else {
                    clearInterval(intervalId);
                    timeAlpha = 0;
                }
            }, frequency);
    
            touchStartY = 0;
        }
    };

    return {
        touchStart,
        touchEnd
    };
}
/**
 * Страница со слайдером.
 * 
 * Задание было такое:
 * 
 * 1. Реализуйте простой слайдер для touch устройств(события мыши могут не обрабатываться)
 */
export function Slider() {
    const backgroundRef = createRef();
    const [currentY, setCurrentY] = useState(0);
    const {touchStart, touchEnd} = createTouchHandlers(backgroundRef, currentY, setCurrentY);

    return (
        <Root>
            Слайдер ниже будет работать только на мобильных устройствах или в режиме их эмуляции
            <SliderContainer onTouchStart={touchStart} onTouchEnd={touchEnd}>
                <SliderBackground top={currentY} ref={backgroundRef}>
                    {
                        Array.from(
                            { length: 100 }, 
                            (x, index) => (
                                // здесь можно использовать index в качестве ключа, т.к.
                                // список элементов слайдера остаётся постоянным
                                <SliderItem key={index}>
                                    {`Почти бесконечные слова ${index}`}
                                </SliderItem>
                            )
                        )
                    }
                </SliderBackground>
            </SliderContainer>
        </Root>
    );
}