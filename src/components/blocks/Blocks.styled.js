import styled from 'styled-components';

export const Root = styled.div`
    display: flex;
`;

export const Block1 = styled.div`
    width: 20vw;
    height: 20vw;
    margin-right: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ddffdd;
`;

export const Block2 = styled.div`
    width: 5vw;
    height: 5vw;
    background-color: #ddddff;
`;

export const ManagedBlock1 = styled.div`
    width: 20vw;
    height: 20vw;
    margin-right: 2vw;
    background-color: #ddffdd;
`;

export const ManagedBlock2 = styled.div`
    position: relative;
    ${({topLeft}) => `top: ${topLeft}px; left: ${topLeft}px;`}
    width: 5vw;
    height: 5vw;
    background-color: #ffdddd;
`;