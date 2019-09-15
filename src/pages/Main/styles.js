import styled, { keyframes } from 'styled-components';

export const Form = styled.form`
  display: flex;

  margin-top: 32px;

  input {
    flex: 1;

    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px 15px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  margin-left: 16px;
  padding: 0 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 32px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px 0;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;

export const ErrorMessage = styled.div`
  background-color: tomato;
  border-radius: 4px
  margin: 16px;
  padding: 12px;

  p {
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
`;
