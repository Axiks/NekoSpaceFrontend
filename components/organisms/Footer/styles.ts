import L from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: #f3f3f3;
  padding: 18px 0;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #606060;
`;

export const Link = styled(L)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  transition: 200ms ease all;

  :hover {
    opacity: .75;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const PoliticsLinksWrapper = styled(LinksWrapper)`
  ${Link} {
    color: #606060;
  }
`;

export const MediaIconsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  column-gap: 14px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #fff;
  margin: 16px 0;
`;

export const Copyright = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;

  color: #606060;
`;