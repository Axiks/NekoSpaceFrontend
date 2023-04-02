import styled from "styled-components";


export const CardContainer = styled.article`
  width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 254px;
  object-fit: cover;
  border: 1px solid #808080;
`;

export const Title = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
`;