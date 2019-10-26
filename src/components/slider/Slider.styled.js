import styled from 'styled-components';

export const Root = styled.div`

`;

export const SliderContainer = styled.div`
    position: relative;
    width: 250px;
    height: 500px;
    margin-top: 7px;
    border: 1px solid darkgray;
    background-color: #eeffee;
    overflow-y: hidden;
    cursor: grab;
`;

export const SliderBackground = styled.div.attrs(({top}) => ({
    style: {
      top,
    },
  }))`
    position: absolute;
    left: 0;
    padding: 0.7vw;
    user-select: none;
    text-align: center;
    line-height: 30px;
    pointer-events: none;
`;

export const SliderItem = styled.div`
    height: 30px;

    &:nth-child(even) {
        background-color: #ddddff;
    }
`;