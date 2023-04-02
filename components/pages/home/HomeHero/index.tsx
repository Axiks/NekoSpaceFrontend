import type { FC } from 'react';
import { chunk } from 'lodash';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { SearchInput } from '@molecules';
import { 
  HomePageHeroContainer,
  Title,
  SearchInputWrapper,
  AnimeTitlesContainer,
  AnimeTitlesColumn,
  AnimeTitle
} from './styles';

export interface IHomeHeroProps {

}

const titles = [
  {
    name: 'Великий куш',
    link: '#'
  },
  {
    name: 'Поклик ночі',
    link: '#'
  },
  {
    name: 'Низькорівневий персонаж Томозакі',
    link: '#'
  },
  {
    name: 'Наруто',
    link: '#'
  },
  {
    name: 'Поголився і привів додому старшокласницю',
    link: '#'
  },
  {
    name: 'Такт. Опус Доля',
    link: '#'
  },
  {
    name: 'Шпигун та сім\'я',
    link: '#'
  },
  {
    name: 'Моє переродження в меч',
    link: '#'
  },
  {
    name: 'Волейбол',
    link: '#'
  },
];

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const HomeHero: FC<IHomeHeroProps> = () => {
  return (
    <HomePageHeroContainer>
      <Title>
        Тут є все про твоє
        <br />
        улюблене аніме!
      </Title>
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
      <AnimeTitlesContainer>
        {chunk(
          titles.map(({ name, link }) => (
            <AnimeTitle key={name} href={link}>
              <ResponsiveEllipsis
                text={name}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="words"
              />
            </AnimeTitle>
          )),
          3
        ).map((titles, index) => (
          <AnimeTitlesColumn key={index}>{titles}</AnimeTitlesColumn>
        ))}
      </AnimeTitlesContainer>
    </HomePageHeroContainer>
  )
};

export default HomeHero;