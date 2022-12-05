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
import useInfiniteScroll from 'react-infinite-scroll-hook';
import React, { useState, useEffect } from 'react';
import { GET_ANIMES_LIST, GET_ANIMES_LIST_PACKET_LOAD } from '../../GraphQL/Query/Queries'
import { MainTitleHelper } from '../../helpers/mainTitleHelper'



function setSelectMainName(titles){
  var animeName = titles.find(x => x.isMain === true);
  return animeName
}

export function AnimeListComponent(props){
  const [ animeData, setAnimeData ] = React.useState(props.animeEdges);
  const [ before, setLoadCursor ] = React.useState(props.animeEdges[props.animeEdges.length - 1].cursor);

  const { loading, error, data, fetchMore } = useQuery(GET_ANIMES_LIST_PACKET_LOAD, {
        variables: { before },
  });
  // const { loading, items, hasNextPage, error, loadMore } = props.animes;

  const hasNextPage = true;
  //const loading = false


  function loadMore(){
    console.log('Load more')
    
    console.log('Cursor')
    setLoadCursor(animeData[props.animeEdges.length - 1].cursor)
    console.log(animeData[props.animeEdges.length - 1].cursor)

    fetchMore({
      variables: {
        before
      },
    })

    console.log('Data')
    console.log(data)

    console.log('Error')
    console.log(error)

    setAnimeData([...animeData, ...data.anime.edges])
  }
  


  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    // disabled: !!error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 400px 0px',
  });

  console.log('Anime edge')
  console.log(props.animeEdges)

    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(264px, 1fr))'>
            {animeData.map(data => (  
                <Card maxW='sm'>
                    <CardBody>
                      <AspectRatio ratio={11 / 17}>
                        <Image src= {data.node.posters[0].poster.original}
                          alt='Anime name'
                          borderRadius='lg'
                          objectFit='cover'
                          //fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/219/133/1324244654527.jpg'
                          fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/290/992/0aa.jpg'
                          />
                      </AspectRatio>
                        
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                          <LinkRouter to= { '/anime/' + data.node.id }>
                             <LinkOverlay>
                                {/* {setSelectMainName(data.node.titles).body} */}
                                <MainTitleHelper titles= {data.node.titles} />
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
          {(loading || hasNextPage) && (
              <Card ref={sentryRef}  maxW='sm'>
                <>Loadding</>
              </Card>
            )}
        </SimpleGrid>
    )
}