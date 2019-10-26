import React from 'react';
import './App.css';
import {ApplicationRoot, Navigation, Main, NavButton} from './App.styled';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import {Slider} from './components/slider/Slider';
import {Canvas} from './components/canvas/Canvas';
import {Modules} from './components/modules/Modules';
import {Factory} from './components/factory/Factory';
import {Request} from './components/request/Request';
import {WebSockets} from './components/web-sockets/WebSockets';
import {Blocks} from './components/blocks/Blocks';
import {Timing} from './components/timing/Timing';
import {Squares} from './components/squares/Squares';

/**
 * Редирект на 1ю страницу, если пользователь попал на не предусмотренный адрес
 */
const redirectRender = () => <Redirect to='/slider' />;
/**
 * Корень приложения
 */
function App() {
    return (
        <ApplicationRoot>
            <BrowserRouter>
                <Navigation>
                    <NavButton to='/slider'>1. Слайдер</NavButton>
                    <NavButton to='/canvas'>2. Canvas</NavButton>
                    <NavButton to='/modules' >3. Модули</NavButton>
                    <NavButton to='/factory'>4. Фабрика</NavButton>
                    <NavButton to='/requests'>5. Запросы</NavButton>
                    <NavButton to='/sockets'>6. Сокеты</NavButton>
                    <NavButton to='/blocks'>7. Блоки</NavButton>
                    <NavButton to='/timing'>8. Тайминг</NavButton>
                    <NavButton to='/squares'>9. Квадраты</NavButton>
                </Navigation>
                <Main>
                    <Switch>
                        <Route exact path='/slider' component={Slider} />
                        <Route exact path='/canvas' component={Canvas} />
                        <Route exact path='/modules' component={Modules} />
                        <Route exact path='/factory' component={Factory} />
                        <Route exact path='/requests' component={Request} />
                        <Route exact path='/sockets' component={WebSockets} />
                        <Route exact path='/blocks' component={Blocks} />
                        <Route exact path='/timing' component={Timing} />
                        <Route exact path='/squares' component={Squares} />
                        <Route render={redirectRender} />
                    </Switch>
                </Main>
            </BrowserRouter>
        </ApplicationRoot>
    );
}

export default App;
