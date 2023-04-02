import styled from 'styled-components';

export const HomePageHeroContainer = styled.article`
  height: 620px;
  background-color: #F3F3F3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  margin: 0 0 48px;
`;

export const SearchInputWrapper = styled.div`
  width: 50%;
`;

export const AnimeTitlesContainer = styled.div`
  width: 40%;
  margin-top: 40px;
  display: flex;
  column-gap: 50px;
  justify-content: space-between;
`;

export const AnimeTitlesColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: space-between;
`;



export const AnimeTitle = styled.a`
  color: #808080;
  font-weight: 300;
  font-size: 14px;
  line-height: 17.5px;
  letter-spacing: 0.02em;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 168px;
  max-height: 36px;

  transition: 300ms opacity ease;

  :hover {
    opacity: 0.7;
  }
`;
