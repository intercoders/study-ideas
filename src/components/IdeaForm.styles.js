import styled from 'styled-components';

export const FormWrapper = styled.form`
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

export const ActionsWrapper = styled.div`
  display: flex;

  > * + * {
    margin-left: 5px;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px;
  background: #333;
  color: #fff;
`;
