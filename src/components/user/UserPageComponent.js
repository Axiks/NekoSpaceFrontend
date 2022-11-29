import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux'
import { isUserLogged, selectUser } from '../../features/oauth/userSlice'
import UserFavoriteAnimeComponent from "./userFavoriteAnime/UserFavoriteAnimeComponent";
import { useQuery, gql, useMutation } from '@apollo/client';
import {
    BrowserRouter as Router,
    Link  as LinkRouter
  } from "react-router-dom";


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
    const nekoData = useSelector(selectUser)

    const { loading, error, data } = useQuery(GET_MORE_USER_DATA);
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;

    console.log(data)

    return(
        <div>
            <Stack>
                <Heading size='md'>{nekoData.username} </Heading>
                <Text>User id: {nekoData.userid} </Text>
                <Text>User email: {nekoData.email} </Text>
                <Text>Role: {nekoData.role} </Text>
                <LinkRouter to= { '/me/setting' }>
                    <Button colorScheme='teal'>Setting</Button>
                </LinkRouter>
                <Heading size='md'>About </Heading>
                <Text> {data.about} </Text>
                <UserFavoriteAnimeComponent />
            </Stack>
        </div>
    )
}