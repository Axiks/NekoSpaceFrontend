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
import { SearchComponent } from './SearchComponent'
import { GET_ANIMES_LIST } from '../../GraphQL/Query/Queries'

const images = [
  { url: "https://cdn.nekos.life/neko/neko_267.jpeg" },
  { url: "https://cdn.nekos.life/neko/neko250.jpg" },
  { url: "https://cdn.nekos.life/neko/neko_225.png" },
  { url: "https://cdn.nekos.life/neko/neko217.png" },
  { url: "https://cdn.nekos.life/neko/neko361.jpeg" },
  { url: "https://cdn.nekos.life/neko/neko025.png" },
  { url: "https://cdn.nekos.life/neko/neko338.jpeg" },
];

export function HomePageComponent() {
    const { loading, error, data } = useQuery(GET_ANIMES_LIST);
    if(!loading){
        var animes = data.anime.nodes;
        console.log(animes);
    }
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return <p>Error : {error.message}</p>;
    
    return(
      <div className="home">
        <SearchComponent />
        <SliderComponent images={images}/>
        <AnimeListComponent animes={animes} />
      </div>
    );
  }

  export default HomePageComponent;