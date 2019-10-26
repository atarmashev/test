import React from 'react';
import {Root, Block1, Block2, ManagedBlock1, ManagedBlock2} from './Blocks.styled';
import {createRef, useEffect, useState} from 'react';

// Стили для задачи В

const parentStyle = {
    alignItems: 'center',
    backgroundColor: '#ddffdd',
    display: 'flex',
    height: 270,
    justifyContent: 'center',
    width: 270,
};

const childStyle = {
    alignItems: 'center',
    backgroundColor: '#99ffff',
    height: 50,
    width: 50,
};
/**
 * Страница с блоками
 * 
 * Задание было такое:
 * 
 * Сверстать 2 блока (1-Главный, 2-Дочерний). Разместить блок 2 внутри блока 1 строго посередине несколькими способами.
     А) а с помощью JS.
     Б) с помощью CSS.
     В)так чтобы весь код был только в 1-й HTML страницы.  
 */
export function Blocks() {
    const parentRef = createRef();
    const childRef = createRef();
    /**
     * Родитель квадратный, поэтому мы не делаем различия между left и top
     */
    const [topLeft, setTopLeft] = useState(0);

    useEffect(() => {
        const parent = parentRef.current;
        const child = childRef.current;
        // ещё это нужно делать при изменении размеров рабочей области
        setTopLeft((parent.clientWidth - child.clientWidth) / 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Root>
            <ManagedBlock1 ref={parentRef}>
                <ManagedBlock2 topLeft={topLeft} ref={childRef} />
            </ManagedBlock1>
            <Block1>
                <Block2 />
            </Block1>
            <div style={parentStyle}>
                <div style={childStyle} />
            </div>
        </Root>
    );
}