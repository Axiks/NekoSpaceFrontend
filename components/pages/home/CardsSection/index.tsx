import type { FC, MouseEventHandler } from 'react';
import { Button, SHAPE, KIND } from 'baseui/button';
import { Grid, Cell } from 'baseui/layout-grid';
import { Card, ICardProps } from '@molecules';
import {
  CardsSectionContainer,
  Title,
  TitleRowWrapper,
  CardsWrapper
} from './styles';


export interface ICardsSectionProps {
  title: string;
  cards: ICardProps[];
  onMoreButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const CardsSection: FC<ICardsSectionProps> = ({ title, cards, onMoreButtonClick }) => (
  <CardsSectionContainer>
    <Grid gridColumns={12}>
      <Cell span={[12]}>
        <TitleRowWrapper>
          <Title>{title}</Title>
          <Button
            kind={KIND.secondary}
            shape={SHAPE.pill}
            onClick={onMoreButtonClick}
          >
            Більше
          </Button>
        </TitleRowWrapper>
      </Cell>
      <Cell span={[12]}>
        <CardsWrapper>
          {cards.map((card) => <Card key={card.name} {...card} />)}
        </CardsWrapper>
      </Cell>
    </Grid>
  </CardsSectionContainer>
);

export default CardsSection;
