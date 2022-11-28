import { useQuery, gql, useMutation } from '@apollo/client';
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading, Text, Link } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { FavoriteButtonComponent } from './FavoriteBtn/FavoriteBtnComponent'
import { ViewStatusComponent } from './viewStatus/ViewStatusComponent'
import { useSelector, useDispatch } from 'react-redux'
import { isUserLogged, selectUser } from '../../features/oauth/userSlice'
import { RatingComponent } from './rating/RatingConponent'
import { LinksAnotherServiceComponent } from './linksAnotherService/linksAnotherService'


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
            viewingStatusInUsers{
                userId,
                status
            },
            ratingInUsers{
                userId,
                ratingValue
            },
            anotherService{
                kitsuId,
                myAnimeList,
                notifyId,
                animePlanetId,
                aniSearchId,
                livechartMeId,
                animeDBId,
                anilistId
            }
        }
    }
  }
`;


export function AnimePageComponent() {
    const { anime_id } = useParams()
    const isNekoLogged = useSelector(isUserLogged)
    const selectNekoData = useSelector(selectUser)
    
    const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
        variables: { anime_id },
      });
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;

    var userId = selectNekoData != null ? selectNekoData.userid : null
    console.log(userId)

    var anime = data.anime.nodes[0];
    console.log(anime);

    // Перевіряємо чи в улюблених
    var isNekoFavorite = anime.favoriteInUsers.some(e => e.userId === userId)
    console.log('is Favorite')
    console.log(isNekoFavorite)

    // Чи відмічали статус даного татйлу?
    var nekoViewStatus = anime.viewingStatusInUsers.find(e => e.userId === userId) ?? null
    console.log('View status')
    console.log(nekoViewStatus)

    // Оцінка тайтлу
    var nekoRating= anime.ratingInUsers.find(e => e.userId === userId) ?? null
    console.log('Neko rating')
    console.log(nekoRating)

    // Links to another service
    var links = []

    var animeLinks = anime.anotherService
    if(animeLinks.kitsuId != null) links.push({ label: 'Kitsu', link: 'https://kitsu.io/anime/' + animeLinks.kitsuId });
    if(animeLinks.myAnimeList != null) links.push({ label: 'My Anime List', link: 'https://myanimelist.net/anime/' + animeLinks.kitsuId });
    if(animeLinks.notifyId != null) links.push({ label: 'Notify', link: 'https://notify.moe/anime/' + animeLinks.myAnimeList });
    if(animeLinks.animePlanetId != null) links.push({ label: 'Anime Planet', link: 'https://www.anime-planet.com/anime/' + animeLinks.animePlanetId });
    if(animeLinks.aniSearchId != null) links.push({ label: 'AniSearch', link: 'https://www.anisearch.com/anime/' + animeLinks.aniSearchId });
    if(animeLinks.livechartMeId != null) links.push({ label: 'LivechartMe', link: 'https://www.livechart.me/anime/' + animeLinks.livechartMeId });
    if(animeLinks.animeDBId != null) links.push({ label: 'AnimeDB', link: 'https://anidb.net/anime/' + animeLinks.animeDBId });
    if(animeLinks.anilistId != null) links.push({ label: 'Anilist', link: 'https://anilist.co/anime/' + animeLinks.anilistId });

    // Статус трансляції
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
            <GridItem colSpan={3}>
                { isNekoLogged ? <FavoriteButtonComponent animeId= {anime.id} isFavoriteStatus= { isNekoFavorite } /> : null }
                { isNekoLogged ? <ViewStatusComponent animeId= {anime.id} viewStatus= { nekoViewStatus != null ? nekoViewStatus.status : null } /> : null }
                { isNekoLogged ? <RatingComponent animeId= {anime.id} userRating = { nekoRating != null ? nekoRating.ratingValue : null } /> : null }
                <LinksAnotherServiceComponent linksToAnotherService= { links } />
            </GridItem>
            <GridItem colSpan={9} bg='papayawhip' >
            </GridItem>
        </Grid>
    );
}