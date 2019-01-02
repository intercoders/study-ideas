import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin:10px 0;

  h1,h2 {
    margin: 0;
    font-weight: 400;
    line-height: 1;
  }
`;

export const FooterTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const AsideTitle = styled.div`
  background: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  margin: 0 5px;

  height: 50px;
  width: 10px;
`;
