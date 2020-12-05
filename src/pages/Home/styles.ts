import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 110px;
  width: 450px;
`;

export const Form = styled.form`
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
  }
`;
