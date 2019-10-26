import styled from 'styled-components';

export const Root = styled.div`
    width: calc(90vw - 20px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1vw;
`;

export const Square = styled.div`
   width: 5vw;
   height: 5vw;
   margin: 1vw;
   background-color: ${({backgroundColor}) => backgroundColor};
`;