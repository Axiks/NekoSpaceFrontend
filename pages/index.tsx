import Head from 'next/head';
import React from 'react';
import { ICardProps } from '@molecules';
import { HomeHero, SliderSection, CardsSection } from '@pages/home';

const cards: ICardProps[] = [
  {
    name: 'Name Title 0',
    posterUrl: 'https://picsum.photos/190/254'
  }, 
  {
    name: 'Name Title 1',
    posterUrl: 'https://picsum.photos/190/254'
  },
  {
    name: 'Name Title 2',
    posterUrl: 'https://picsum.photos/190/254'
  },
  {
    name: 'Name Title 3',
    posterUrl: 'https://picsum.photos/190/254'
  },
  {
    name: 'Name Title 4',
    posterUrl: 'https://picsum.photos/190/254'
  },
  {
    name: 'Name Title 5',
    posterUrl: 'https://picsum.photos/190/254'
  },
]

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Nekospace</title>
      </Head>
      <HomeHero />
      <SliderSection />
      <CardsSection
        title="Недавно українізовані тайтли"
        cards={cards}
        onMoreButtonClick={() => {}}
      />
      <CardsSection
        title="Популярні аніме"
        cards={cards}
        onMoreButtonClick={() => {}}
      />
    </>
  );
}
