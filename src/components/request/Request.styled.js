import styled from 'styled-components';

export const Root = styled.div`
    font-size: 1.0vw;
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

export const ListOfTasks = styled.div`
    width: 40vw;
    margin: 0.5vw 0;
    padding: 0.5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid darkgray;
`;

export const TaskContainer = styled.div`
    height: 7vw;
    border-bottom: 1px solid darkgray;
`;

export const TaskText = styled.textarea`
    width: 37vw;
    resize: none;
`;

export const DeleteTask = styled.div`
    width: 6vw;
    height: 1.7vw;
    line-height: 1.7vw;
    padding-left: 0.5vw;
    background-color: #ffbbbb;
    border-radius: 0.1vw;
    border: 1px solid darkgray; 
    cursor: pointer;

    &:hover {
        background-color: #ffaaaa;
    }
`;