import React from 'react';
import {Root} from './Module.styles';
// EmptyString нас не интересует, этот импортлько для того, чтобы NativeModule.js не потерялся
import EmptyString from './dependencies/NativeModule';
// для NodeJS этот синтаксис является стандартным 
import sayHelloCommonJS from './dependencies/CommonJSModule';

/**
 * Страница с примером использования модулей
 */
export function Modules() {
    window['sayHelloNative']();
    sayHelloCommonJS();

    return (
        <Root>Эта страница выводит в консоль результаты работы функций, импортированных разными способами {EmptyString}</Root>
    );
}