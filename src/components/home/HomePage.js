import { Heading, Stack, Wrap, WrapItem, Text, Center, Box, ButtonGroup, Link } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup, Spacer, Button } from '@chakra-ui/react'
import { Grid, GridItem, Flex } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, SimpleGrid } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack
} from '@chakra-ui/react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Route,
  Link as LinkRouter
} from "react-router-dom";

import { useQuery, gql } from '@apollo/client';
import { AspectRatio } from '@chakra-ui/react'
import { SliderComponent } from './SliderComponent'
import { AnimeListComponent } from './AnimeListComponent'
import { SearchComponent } from './homeHead/SearchComponent'
import { GET_ANIMES_LIST } from '../../GraphQL/Query/Queries'
import { PropositionAnimeComponent } from './homeHead/PropositionAnimeComponent'
import { HomeHeadComponent } from './homeHead/HomeHeadComponent'

// const images = [
//   { url: "https://cdn.nekos.life/neko/neko_267.jpeg" },
//   { url: "https://cdn.nekos.life/neko/neko250.jpg" },
//   { url: "https://cdn.nekos.life/neko/neko_225.png" },
//   { url: "https://cdn.nekos.life/neko/neko217.png" },
//   { url: "https://cdn.nekos.life/neko/neko361.jpeg" },
//   { url: "https://cdn.nekos.life/neko/neko025.png" },
//   { url: "https://cdn.nekos.life/neko/neko338.jpeg" },
// ];

const images = [
  {
     url: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142838-tynuN00wxmKO.jpg",
     animeId: "1a103d61-ec9e-47cc-b7e3-a3eadb4a8fdc"
  },
  { 
    url: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130003-Ht7myAxpdNPo.jpg",
    animeId: "3d9a4bfe-b067-43a7-9884-3bdd9d6e4e93"
  },
  {
     url: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
     animeId: "b2d4cd90-2a11-4b0a-a31d-72a392a88efd"
  },
  { 
    url: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/125367-hGPJLSNfprO3.jpg",
    animeId: "d0599cd8-24f6-41ea-bc32-8c88309c86d9"
   },
  { 
    url: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124845-uw8Fiw3kWtbj.jpg",
    animeId: "b2d4cd90-2a11-4b0a-a31d-72a392a88efd"
   },
];

export function HomePageComponent() {
    const { loading, error, data } = useQuery(GET_ANIMES_LIST);
    if(!loading){
        var animeEdges = data.anime.edges;
        console.log(animeEdges);
    }
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return <p>Error : {error.message}</p>;
    
    return(
      <div className="home">
        <HomeHeadComponent />
        <SliderComponent images={images}/>
        <Box h="40px"></Box>
        <AnimeListComponent animeEdges={animeEdges} />
      </div>
    );
  }

  export default HomePageComponent;