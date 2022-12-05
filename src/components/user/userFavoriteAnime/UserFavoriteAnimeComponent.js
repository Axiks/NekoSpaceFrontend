import { AspectRatio, Heading, Image, LinkOverlay, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Route,
    Link as LinkRouter
  } from "react-router-dom";
import MainTitleHelper from '../../../helpers/mainTitleHelper';
import RootTitleHelper from '../../../helpers/rootTitleHelper';


export function UserFavoriteAnimeComponent(props){
    const [ animeList, setAnimeList ] = React.useState(props.animes)
    console.log(animeList)
    console.log(animeList[0])


    return(
        <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(140px, 1fr))'>
            {props.animes.map(data => (
                <Card>
                    <AspectRatio ratio={11 / 17}>
                        <Image
                                objectFit='cover'
                                src={data.anime.posters[0].poster.original}
                                alt='Caffe Latte'
                            />
                    </AspectRatio>
                    <CardBody>
                        <LinkRouter to= { '/anime/' + data.anime.id }>
                            <LinkOverlay>
                                {/* <Heading size='sm'>{ setSelectMainName(data.anime.titles).body }</Heading> */}
                                <Heading size='sm' noOfLines={2}><MainTitleHelper titles= {data.anime.titles} /></Heading>
                                <Heading size='sm' fontWeight='light' noOfLines={2}><RootTitleHelper titles= {data.anime.titles} /></Heading>
                            </LinkOverlay>
                        </LinkRouter>
                    </CardBody>
                </Card>
            ))}
        </SimpleGrid>
    )
}

export default UserFavoriteAnimeComponent