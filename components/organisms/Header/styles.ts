import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 88px;
  padding: 24px 0;
  background-color: #fff;

  > div {
    height: 100%;
  }
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const MenuItem = styled.a<{ active?: boolean }>`
  color: ${({ active }) => active ? '#000': '#606060'};
  font-weight: 500;
  font-size: 16px;
  transition: 300ms color ease-in-out;

  :hover {
    color: #000;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const SearchButton = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LogInButtonMargin = styled.div`
  margin: 0 8px 0 32px;
`;