import styled from "styled-components";

export const CardsSectionContainer = styled.section`
  background-color: #fff;
  padding-bottom: 64px;

  :last-of-type {
    padding-bottom: 80px;
  }
`;

export const TitleRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.02em;
`;

export const CardsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;