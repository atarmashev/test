import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ApplicationRoot = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

export const Navigation = styled.nav`
    width: 10vw;
    border-right: 1px solid darkgray;
    padding: 1vw;
`;

export const Main = styled.main`
    padding: 1vw;
`;

export const NavButton = styled(Link)`
    display: block;
    height: 3vw;
    line-height: 3vw;
    font-size: 1vw;
    padding-left: 0.5vw;
    color: inherit;
    background-color: #bbffbb;
    border-radius: 0.1vw;
    margin: 0.2vw 0;
    border: 1px solid darkgray; 

    &:hover {
        background-color: #77ff77;
    }
`;