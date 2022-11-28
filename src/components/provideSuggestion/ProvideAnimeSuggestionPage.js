import { useQuery, gql, useMutation } from '@apollo/client';
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading, Text, Link } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'
import LinksAnotherServiceComponent from '../anime/linksAnotherService/linksAnotherService';
import SuggestionPostersComponent from './suggestionPosters/SuggestionPostersComponent';

// const PROVIDE_TRANSLATION_SUGGESTION = gql`
// muttation CreateTranslationProposal($anime_id: UUID!, $proposition: String!, $language: Languages!){
//     createTranslationProposal(input: {
//         animeId: $anime_id,
//         proposition: $proposition,
//         language: $language
//     }) {
//         isSucces
//     }
// }
// `;

const GET_ANIME_BY_ID = gql`
    query Anime($anime_id: UUID!){
        anime(where: {
        id: {eq: $anime_id}
        }) {
            totalCount,
            nodes{
                id,
                numEpisodes,
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
                genres{
                    genre {
                        name
                    }
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

export default function ProvideAnimeSuggestionPage(){
    const { anime_id } = useParams()

    const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
        variables: { anime_id },
      });
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;
    var anime = data.anime.nodes[0];
    console.log(anime);

    // function provideTranslationSuggestion(mutateFunction){
    //     const [mutateFunction, { data, loading, error }] = useMutation(PROVIDE_TRANSLATION_SUGGESTION);
    //     if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    //     if (error) return `Submission error! ${error.message}`;
    // }
    // Links to another service
    var links = []

    var animeLinks = anime.anotherService
    if(animeLinks.kitsuId != null) links.push({ label: 'Kitsu', link: 'https://kitsu.io/anime/' + animeLinks.kitsuId });
    if(animeLinks.myAnimeList != null) links.push({ label: 'My Anime List', link: 'https://myanimelist.net/anime/' + animeLinks.myAnimeList });
    if(animeLinks.notifyId != null) links.push({ label: 'Notify', link: 'https://notify.moe/anime/' + animeLinks.notifyId });
    if(animeLinks.animePlanetId != null) links.push({ label: 'Anime Planet', link: 'https://www.anime-planet.com/anime/' + animeLinks.animePlanetId });
    if(animeLinks.aniSearchId != null) links.push({ label: 'AniSearch', link: 'https://www.anisearch.com/anime/' + animeLinks.aniSearchId });
    if(animeLinks.livechartMeId != null) links.push({ label: 'LivechartMe', link: 'https://www.livechart.me/anime/' + animeLinks.livechartMeId });
    if(animeLinks.animeDBId != null) links.push({ label: 'AnimeDB', link: 'https://anidb.net/anime/' + animeLinks.animeDBId });
    if(animeLinks.anilistId != null) links.push({ label: 'Anilist', link: 'https://anilist.co/anime/' + animeLinks.anilistId });

    return(
        <> 
            <Image src= {anime.posters[0].poster.original}
                alt='Anime name'
                borderRadius='lg'
                objectFit='cover'
                fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/290/992/0aa.jpg'
            />
            <Heading as='h1' noOfLines={1}>{anime.titles[0].body}</Heading>
            { anime.titles[1] != null ? (<Heading as='h6' size='xs' noOfLines={1}>
                <Text as='i'>{anime.titles[1].body}</Text>
            </Heading>) : (<div />)}
            <Text>Country: Japan</Text>
            <Text>Duration: { anime.episodesDurationSeconds ? (anime.episodesDurationSeconds) : ( <i>none</i> ) }</Text>
            <LinksAnotherServiceComponent linksToAnotherService= { links } />

            <SuggestionPostersComponent animePosters= {anime.posters} />
        </>
    )
}