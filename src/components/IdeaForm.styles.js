import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
`;

export const InputGroup = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 20px;
  }

  textarea {
    height: 200px;
    resize: vertical;
  }

  /* common input styles */
  input, textarea {
    border: 1px solid #333;
    padding: 10px;
    font-size: 16px;
  }
`;

export const Separator = styled.div`
  width: 1px;
  background: #000;
  margin: 0 30px;
`;

export const ActionsGroup = styled.div`
  flex-basis: 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  > * + * {
    margin-top: 30px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 10px;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  padding: 10px;
  border: none;

  background: #333;
  color: #fff;

  font-size: 14px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 8px;
  border: none;
  border-radius: 100%;
  width: 50px;
  height: 50px;

  background: #ccc;
  color: #000;

  :before {
    transform: rotate(45deg);
    content: '';
    display: block;
    border-top: 1px solid #000;
    width: 100%;
  }

  :after {
    transform: translateY(-1px) rotate(-45deg);
    content: '';
    display: block;
    border-top: 1px solid #000;
    width: 100%;
  }
`;
