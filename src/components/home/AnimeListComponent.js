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

export function AnimeListComponent(props){
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(264px, 1fr))'>
            {props.animes.map(anime=> (  
                <Card maxW='sm'>
                    <CardBody>
                      <AspectRatio ratio={11 / 17}>
                        <Image src= {anime.posters[0].poster.original}
                          alt='Anime name'
                          borderRadius='lg'
                          objectFit='cover'
                          //fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/219/133/1324244654527.jpg'
                          fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/290/992/0aa.jpg'
                          />
                      </AspectRatio>
                        
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                          <LinkRouter to= { '/anime/' + anime.id }>
                             <LinkOverlay>
                                {anime.titles[0].body}
                            </LinkOverlay>
                          </LinkRouter>
                        </Heading>
                        <Text>
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <HStack spacing={2}>
                        <Tag size='md' variant='solid' colorScheme='teal'>Comedy</Tag>
                        <Tag size='md' variant='solid' colorScheme='teal'>Romantic</Tag>
                        <Tag size='md' variant='solid' colorScheme='teal'>School</Tag>
                        </HStack>
                    </CardFooter>
                </Card>
            ))}  
        </SimpleGrid>
    )
}