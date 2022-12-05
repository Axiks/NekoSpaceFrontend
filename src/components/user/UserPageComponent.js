import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import UserFavoriteAnimeComponent from "./userFavoriteAnime/UserFavoriteAnimeComponent";
import { useQuery, gql, useMutation } from '@apollo/client';
import {
    BrowserRouter as Router,
    Link  as LinkRouter
  } from "react-router-dom";
import UserSuggestionTitleListComponent from "./userSuggestionTitleList/UserSuggestionTitleListComponent";
import { Badge } from '@chakra-ui/react'


const GET_MORE_USER_DATA = gql`
query Me{
    me{
        id,
        userName,
        email,
        about,
        favoriteAnimes{
            anime{
                id,
                titles{
                    body,
                    isMain,
                    language
                },
                posters{
                    poster{
                        original
                    }
                }
            }
        },
        ratingAnimes{
            animeId,
            ratingValue
        },
        animeViewingStatuses{
            animeId,
            status
        },
    }
}
`;

export default function UserPageComponent(){

    const { loading, error, data } = useQuery(GET_MORE_USER_DATA);
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;
    var me = data.me

    return(
        <Stack>
            <Heading size='xl'>{me.userName} </Heading>
            <Stack>
                <Heading size='md'>About </Heading>
                <Text> {me.about} </Text>
            </Stack>

            {/* <Heading size='md'> Favorite Anime { me.favoriteAnimes.length } </Heading> */}
            <Text fontSize='xl' fontWeight='bold'>
                Favorite Anime 
                <Badge ml='1' fontSize='0.8em' colorScheme='blue'>
                { me.favoriteAnimes.length }
                </Badge>
            </Text>
            { me.favoriteAnimes != null && me.favoriteAnimes.length > 0 ? <UserFavoriteAnimeComponent animes = {me.favoriteAnimes} /> : <Text>Hzzzzz</Text>}
            <Text fontSize='xl'>
                Views anime
                <Badge ml='1' fontSize='0.8em' colorScheme='blue'>
                { me.animeViewingStatuses.length }
                </Badge>
            </Text>
            <Text fontSize='xl'>
                Ratings anime
                <Badge ml='1' fontSize='0.8em' colorScheme='blue'>
                { me.ratingAnimes.length }
                </Badge>
            </Text>
            
            <Heading size='md'> User Suggestion List </Heading>
            <UserSuggestionTitleListComponent userId = {me.id} />

            {/* <LinkRouter to= { '/me/setting' }>
                <Button colorScheme='teal'>Setting</Button>
            </LinkRouter> */}
        </Stack>
    )
}