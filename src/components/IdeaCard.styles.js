import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  h1 {
    margin: 0;
    font-weight: 400;
    line-height: 1;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SideLine = styled.div`
  background: ${({ color }) => color};
  margin-right: 10px;

  height: 50px;
  width: 10px;
`;
