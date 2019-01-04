import styled from 'styled-components';

const cardMargin = 20;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: -${cardMargin}px;

  > * {
    margin: ${cardMargin}px;
  }
`;
