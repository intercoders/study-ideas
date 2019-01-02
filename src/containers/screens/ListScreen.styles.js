import styled from 'styled-components';

const cardMargin = 20;

export const IdeaList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: -${cardMargin}px;

  > * {
    margin: ${cardMargin}px;
  }
`;
