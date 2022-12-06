import { useQuery, gql, useMutation } from '@apollo/client';
import { Box, Button, Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading, Text, Link } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'
import LinksAnotherServiceComponent from '../anime/linksAnotherService/linksAnotherService';
import SuggestionPostersComponent from './suggestionPosters/SuggestionPostersComponent';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import { FiCircle, FiCheckCircle} from "react-icons/fi";
import { RiHome2Line, RiHome2Fill} from "react-icons/ri";
import AddTitleSuggestionFormComponent from './suggestionTitle/AddTitleSuggestionFormComponent';
import AddTitleSuggestionComponent from './suggestionTitle/AddTitleSuggestionComponent';
import SuggestionLinkComponent from './suggestionLink/SuggestionLinkComponent';
import AddSynopsisSuggestionComponent from './suggestionSynopsis/AddSynopsisSuggestionComponent';
import RootTitleHelper from '../../helpers/rootTitleHelper';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

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
        id: $anime_id
        }) {
            totalCount,
            nodes{
                id,
                numEpisodes,
                titles{
                    id,
                    body,
                    language,
                    isAcceptProposal,
                    isMain,
                    isOriginal,
                    creatorUserId
                },
                synopsises{
                    id,
                    body,
                    language,
                    isAcceptProposal,
                    isMain,
                    isOriginal,
                    creatorUserId,
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
            <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(12, 1fr)'
                gap={4}
                >
                <GridItem colSpan={2}>
                    <Image src= {anime.posters[0].poster.original}
                    alt='Anime name'
                    borderRadius='lg'
                    objectFit='cover'
                    fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/290/992/0aa.jpg'
                    />
                </GridItem>
                <GridItem colSpan={10}>
                    <Heading as='h1' noOfLines={1}>
                        <RootTitleHelper titles={anime.titles} />
                    </Heading>
                    <Text>Country: Japan</Text>
                    <Text>Duration: { anime.episodesDurationSeconds ? (anime.episodesDurationSeconds) : ( <i>none</i> ) }</Text>
                </GridItem>
                <GridItem colSpan={12}>
                    <LinksAnotherServiceComponent linksToAnotherService= { links } />
                </GridItem>
            </Grid>
            <Tabs>
                <TabList>
                    <Tab>Poster</Tab>
                    <Tab>Title</Tab>
                    <Tab>Description</Tab>
                    <Tab>Links</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Heading  as='h3' size='sm'>Add your version of the poster</Heading>
                        <SuggestionPostersComponent animePosters= {anime.posters} />
                    </TabPanel>
                    <TabPanel>
                        <Heading  as='h3' size='sm'>Add your version of the title</Heading>
                        <AddTitleSuggestionComponent animeId= {anime.id} titles= {anime.titles} />
                    </TabPanel>
                    <TabPanel>
                        <Heading  as='h3' size='sm'>Add your version of the description</Heading>
                        <AddSynopsisSuggestionComponent animeId= {anime.id} synopsis_list= {anime.synopsises} />
                    </TabPanel>
                    <TabPanel>
                        <Heading  as='h3' size='sm'>Add links to title</Heading>
                        <SuggestionLinkComponent animeId= {anime.id}  />
                    </TabPanel>
                </TabPanels>
            </Tabs>

            {/* <Image src= {anime.posters[0].poster.original}
                alt='Anime name'
                borderRadius='lg'
                objectFit='cover'
                fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/290/992/0aa.jpg'
            /> */}
            {/* <Box>
                <Heading as='h1' noOfLines={1}>
                    <RootTitleHelper titles={anime.titles} />
                </Heading>
                <Text>Country: Japan</Text>
                <Text>Duration: { anime.episodesDurationSeconds ? (anime.episodesDurationSeconds) : ( <i>none</i> ) }</Text>
            </Box> */}
            {/* <LinksAnotherServiceComponent linksToAnotherService= { links } />

            <Tabs>
                <TabList>
                    <Tab>Poster</Tab>
                    <Tab>Title</Tab>
                    <Tab>Description</Tab>
                    <Tab>Links</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Heading  as='h3' size='sm'>Add your version of the poster</Heading>
                        <SuggestionPostersComponent animePosters= {anime.posters} />
                    </TabPanel>
                    <TabPanel>
                        <Heading  as='h3' size='sm'>Add your version of the title</Heading>
                        <AddTitleSuggestionComponent animeId= {anime.id} titles= {anime.titles} />
                    </TabPanel>
                    <TabPanel>
                        <Heading  as='h3' size='sm'>Add your version of the description</Heading>
                        <AddSynopsisSuggestionComponent animeId= {anime.id} synopsis_list= {anime.synopsises} />
                    </TabPanel>
                    <TabPanel>
                        <Heading  as='h3' size='sm'>Add links to title</Heading>
                        <SuggestionLinkComponent animeId= {anime.id}  />
                    </TabPanel>
                </TabPanels>
            </Tabs> */}

            {/* <Heading  as='h2' size='md'>Poster</Heading>
            <Heading  as='h3' size='sm'>Add your version of the poster</Heading>
            <SuggestionPostersComponent animePosters= {anime.posters} />
            <Button colorScheme='teal' variant='outline'>
                Upload image
            </Button> */}

            {/* <Heading  as='h2' size='md'>Title</Heading>
            <Heading  as='h3' size='sm'>Add your version of the title</Heading>
            <AddTitleSuggestionComponent animeId= {anime.id} titles= {anime.titles} /> */}

            {/* <Heading  as='h2' size='md'>Description</Heading>
            <Heading  as='h3' size='sm'>Add your version of the description</Heading>
            <AddSynopsisSuggestionComponent animeId= {anime.id} synopsis_list= {anime.synopsises} /> */}

            {/* <Heading  as='h2' size='md'>Links</Heading>
            <Heading  as='h3' size='sm'>Add links to title</Heading>
            <SuggestionLinkComponent animeId= {anime.id}  /> */}
        </>
    )
}