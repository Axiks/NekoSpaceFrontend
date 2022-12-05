import { AspectRatio, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function setSelectMainName(titles){
    var animeName = titles.find(x => x.isMain === true);
    return animeName
  }

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
                        <Heading size='sm'>{ setSelectMainName(data.anime.titles).body }</Heading>
                    </CardBody>
                </Card>
            ))}
        </SimpleGrid>
    )
}

export default UserFavoriteAnimeComponent