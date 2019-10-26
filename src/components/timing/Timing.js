import React from 'react';
import {Root, Button, Elements, OpenableContainer} from './Timing.styled';
import {useState} from 'react';
/**
 * Страница с раскрывающимися элементами
 * 
 * Задание было такое:
 * 
 * Создать элемент на странице. При клике на который будут открываться 3 любых
 * элемента на странице в течении 1 секунды. И при повторном клике 3 элемента будут
 * закрываться.
 * 
 * Как они будут открываться закрываться на ваше усмотрение(+ дебаунс) 
 */
export function Timing() {
    const [isOpen, setIsOpen] = useState(false); 
    // для дебаунса
    const [isInAction, setIsInAction] = useState(false); 
    const onClick = isInAction ?
        undefined :
        () => {
            setIsInAction(true);
            setTimeout(() => {
                setIsOpen(!isOpen);
                setIsInAction(false);
            }, 1000);
        };

    return (
        <Root>
            При клике на кнопку соседние элементы дожны раскрываться
            <Elements>
                <Button onClick={onClick}>Открыть</Button>
                <OpenableContainer isAnimated={isInAction} isOpen={isOpen}>
                    {'Много текста '.repeat(100)}
                </OpenableContainer>
                <OpenableContainer isAnimated={isInAction} isOpen={isOpen}>
                    {'Много текста '.repeat(100)}
                </OpenableContainer>
                <OpenableContainer isAnimated={isInAction} isOpen={isOpen}>
                    {'Много текста '.repeat(100)}
                </OpenableContainer>
            </Elements>
        </Root>
    );
}