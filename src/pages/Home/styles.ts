import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 110px;
  width: 450px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  width: 714px;
  margin-top: 35px;

  input {
    height: 72px;
    flex: 1;
    padding: 29px;
    font-size: 16px;
    border: none;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;

    &:focus {
      border: ${props => (!props.hasError ? '#04d361' : '#e5383b')} solid 1px;
    }

    &::placeholder {
      color: #a8a8b3;
    }

    ${props =>
      props.hasError &&
      css`
        border: #e5383b solid 1px;
        border-right: 0;
      `}
  }

  button {
    width: 210px;
    background-color: #04d361;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: ${darken(0.1, '#04d361')};
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const RepositoryContainer = styled.div`
  width: 714px;
  margin-top: 120px;
  height: 112px;

  a {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    text-decoration: none;
    transition: 1s;

    & + a {
      margin: 20px 0;
    }

    &:hover {
      transform: translateX(15px);

      svg {
        color: #04d361;
        transform: translateX(10px);
      }
    }

    img {
      width: 83px;
      height: 83px;
      border-radius: 50%;
      margin-left: 14px;
    }

    div {
      margin-left: 22px;

      h3 {
        color: #3d3d4d;
        font-weight: 700;
      }

      h5 {
        color: #a8a8b3;
        font-weight: 400;
      }
    }

    svg {
      transition: 1s;
      color: #c9c9d4;
      margin-left: auto;
      margin-right: 15px;
    }
  }
`;

export const Error = styled.span`
  color: #e5383b;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 8px;

  svg {
    margin-left: 3px;
  }
`;
