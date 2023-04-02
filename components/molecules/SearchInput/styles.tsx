import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;

  > div {
    border: 1px solid #000;
    border-radius: 23px 0 0 23px;
    background-color: #FBF5FF;

    input {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #808080;
    }

    input, div {
      background-color: transparent;
    }
  }

  > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;