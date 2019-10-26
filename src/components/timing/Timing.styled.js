import styled from 'styled-components';

//
export const Root = styled.div`
    @keyframes open {
        from { height: 4vh; };
        to { height: 90vh; };
    }
`;

export const Elements = styled.div`
   display: flex;
`;

export const Button = styled.div`
    margin: 0.5vw 0;
    width: 7vw;
    height: 3vw;
    line-height: 3vw;
    font-size: 1vw;
    padding-left: 0.5vw;
    background-color: #bbffbb;
    border-radius: 0.1vw;
    border: 1px solid darkgray; 
    cursor: pointer;

    &:hover {
        background-color: #77ff77;
    }
`;

export const OpenableContainer = styled.div`
    margin: 0.5vw;
    width: 10vw;
    height: ${({isOpen}) => isOpen ? 90 : 4}vh;
    ${({isAnimated}) => isAnimated && 'animation: open 1s linear backwards;'}
    animation-direction: ${({isOpen}) => isOpen ? 'reverse' : 'normal'}; 
    background-color: #bbffbb;
    border-radius: 0.1vw;
    border: 1px solid darkgray; 
    padding: 0.5vw;
    overflow-y: hidden;
`;