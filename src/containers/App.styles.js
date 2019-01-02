import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Header = styled.div`
  padding: 15px 0;
  background: #1b2b4a;
  color: #fff;

  .items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    h1 {
      margin: 0;
      font-size: 18px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;

  /* add left margin between items except for the first one */
  > * + * {
    margin-left: 15px;
  }
`;

export const Main = styled.div`
  padding: 30px 0;
`;
