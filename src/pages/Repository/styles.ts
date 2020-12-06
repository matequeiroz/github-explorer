import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 151px;

  a {
    display: flex;
    text-decoration: none;
    color: #a8a8b3;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const ContentProfile = styled.section`
  display: flex;
  align-items: center;

  img {
    width: 162px;
    height: 152px;
  }

  div.profile {
    margin-left: 20px;

    h3 {
      font-size: 36px;
      font-weight: 700;
      color: #3d3d4d;
    }

    h5 {
      font-size: 20px;
      font-weight: 400;
      color: #737380;
    }
  }
`;

export const ContentProfileInformation = styled.section`
  display: flex;
  max-width: 420px;
  justify-content: space-between;
  margin-top: 61px;

  div.information-item {
    span {
      font-size: 36px;
      font-weight: 700;
      color: #3d3d4d;
    }
    h5 {
      font-size: 20px;
      font-weight: 400;
      color: #737380;
    }
  }
`;

export const IssueContainer = styled.div`
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

    div {
      margin-left: 22px;

      h3 {
        color: #3d3d4d;
        font-weight: 700;
        margin-bottom: 5px;
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
