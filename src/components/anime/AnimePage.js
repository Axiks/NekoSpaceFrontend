import { useQuery, gql, useMutation } from '@apollo/client';
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading, Text, Link } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { FavoriteButtonComponent } from './FavoriteBtn/FavoriteBtnComponent'
import { useSelector, useDispatch } from 'react-redux'
import { isUserLogged, selectUser } from '../../features/oauth/userSlice'

const GET_ANIME_BY_ID = gql`
query Anime($anime_id: UUID!){
    anime(where: {
      id: {eq: $anime_id}
    }) {
        totalCount,
        nodes{
            id,
            titles{
                body,
                language
            },
            synopsises{
                body,
                language
            },
            posters{
                poster {
                    original
                }
            },
            anotherService {
                myAnimeList
            },
            numEpisodes,
            source,
            premier {
                year,
                sezon
            },
            episodesDurationSeconds,
            genres{
                genre {
                    name
                }
            },
            aired {
                from,
                to
            },
            type,
            favoriteInUsers{
                userId
            },
        }
    }
  }
`;

const UPDATE_ANIME_VIEW_STATUS = gql`
mutation updateUserLibraryEntry($anime_id: UUID!, $view_status: UserViewStatus){
    updateUserLibraryEntry(input: {
        animeId: $anime_id,
        viewStatus: $view_status,
    }) {
        error
    }
  }
`;

function UpdateAnimeViewStatus(props){   
    const [mutateFunction, { data, loading, error }] = useMutation(UPDATE_ANIME_VIEW_STATUS);
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Submission error! ${error.message}`;

    function clickBtn(){
        console.log('button cick')
        var x = mutateFunction({variables: {anime_id: props.animeId, view_status:props.viewStatus}})
        console.log('Update view status response: ')
        console.log(x)
    }

    // onClick={mutateFunction({variables: {anime_id: props.animeId, view_status:props.viewStatus}})}
    return(
        <div>
            <Button onClick={ clickBtn }>
                SetViewStatus
            </Button>
        </div>
    )
    //return { data, loading, error }
}


export function AnimePageComponent() {
    const { anime_id } = useParams()
    const isNekoLogged = useSelector(isUserLogged)
    const selectNekoData = useSelector(selectUser)
    
    const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
        variables: { anime_id },
      });
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;

    var userId = selectNekoData.userid
    console.log(userId)

    var anime = data.anime.nodes[0];
    console.log(anime);

    // Перевіряємо чи в улюблених
    var isNekoFavorite = anime.favoriteInUsers.some(e => e.userId === userId)
    console.log('is Favorite')
    console.log(isNekoFavorite)

    var hasIredData = anime.aired != null;

   // const selectNekoData = useSelector(selectUser)
    
    //console.log(selectNekoData)
    //var hasUserAnimeInFavorite = selectNekoData

    return(
        <Grid 
            // h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(12, 1fr)'
            gap={4}>
            {/* <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' /> */}
            <GridItem colSpan={3}>
                <Image
                    src= {anime.posters[0].poster.original}
                    alt='Anime name'
                    borderRadius='lg'
                    objectFit='cover'
                    width='100%'
                    //fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/219/133/1324244654527.jpg'
                    fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/290/992/0aa.jpg'
                    />
            </GridItem>

            <GridItem colSpan={9}>
                <Heading as='h1' noOfLines={1}>{anime.titles[0].body}</Heading>
                { anime.titles[1] != null ? (<Heading as='h6' size='xs' noOfLines={1}>
                    <Text as='i'>{anime.titles[1].body}</Text>
                </Heading>) : (<div />)}
                
                {/* // Responsive version */}
                <Text noOfLines={[1, 2, 3]}>
                    { anime.synopsises[0] != null ? ( anime.synopsises[0].body ) : ("") }
                </Text>
                {/* Item list */}
                <Text>Type: { anime.type } </Text>
                <Text>Studio: None</Text>
                <Text>Country: Japan</Text>
                { hasIredData ? (<Text>Aired: { anime.aired.from } - {anime.aired.to } </Text>) : (<Text>Aired: none</Text>) }
                <Text>Status: calculate</Text>
                <Text>Premiered: { anime.premier.sezon } { anime.premier.year }</Text>
                <Text>Duration: { anime.episodesDurationSeconds ? (anime.episodesDurationSeconds) : ( <i>none</i> ) }</Text>
                <Text>Episodes count: { anime.numEpisodes }</Text>

            </GridItem>
            <GridItem colSpan={3} bg='tomato'>
                {/* <UpdateAnimeViewStatus animeId= {anime.id} viewStatus= 'PLAN_TO_WATCH'/> */}
                <FavoriteButtonComponent animeId= {anime.id} isFavoriteStatus= { isNekoFavorite } />
            </GridItem>
            <GridItem colSpan={9} bg='papayawhip' >
                <Link href={ "https://myanimelist.net/anime/" + anime.anotherService.myAnimeList }>MyAnimeList</Link>
            </GridItem>
        </Grid>
    );
}