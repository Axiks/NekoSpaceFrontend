import type { FC } from "react";
import { CardContainer, Poster, Title } from "./styles"; 


export interface ICardProps {
  name: string;
  posterUrl: string;
}

const Card: FC<ICardProps> = ({ name, posterUrl }) => (
  <CardContainer>
    <Poster
      alt={name}
      src={posterUrl}
    />
    <Title>{name}</Title>
  </CardContainer>
)

export default Card;