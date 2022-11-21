import { useQuery, gql } from '@apollo/client';
import { Text, Flex, Avatar, Box, Image, Link, Heading , Spacer, Center, Square, Stack, HStack} from '@chakra-ui/react'
import React , { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    redirect,
    useNavigate,
    Link as LinkRouter
  } from "react-router-dom";
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Portal } from '@chakra-ui/react'

var animeProposition = [
  {
    animeId:"3919c495-1ae2-4cbb-8d35-409aef10cab6",
    name:"Toradora"
  },
  {
    animeId:"699a7529-961f-4a3f-b0ad-740606eaba0d",
    name:"Clannad"
  },
  {
    animeId:"8107e880-7161-4b1e-b79c-1df311a18adc",
    name:"Welcome to NHK"
  },
  {
    animeId:"e97708ac-f3a2-4cf4-9f3e-9013dc4569af",
    name:"Spy x Family Part 2"
  },
  {
    animeId:"fe6682ac-562c-4ef2-a75d-d402cdec2680",
    name:"Tensei shitara Ken Deshita"
  },
  {
    animeId:"ccecf2e5-bfd2-4dec-b316-7fbefbd22132",
    name:"Akuyaku Reijou nano de Last Boss wo Kattemimashita"
  },
  {
    animeId:"591f6e6b-a5be-414a-ac49-f96fdc9e05c3",
    name:"Bocchi the Rock!"
  },
  {
    animeId:"83fa0aad-0037-4d9e-a230-947b96ad91a1",
    name:"Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau"
  },
  {
    animeId:"2c72b6e6-1af3-43c4-83f6-1c1fc00773a3",
    name:"Do It Yourself!!"
  }
]

// function useSearchAnime(query){
//     console.log(query)
//     const { loading, error, data } = useQuery(SEARCH_ANIMES_BY_NAME, {
//         variables: { query },
//         });
//     if(!loading) console.log({ loading, error, data })
//     return { loading, error, data }
// }
var search_query = "Toradora"

export function SearchComponent(){
  const [search_query_o, setSearchQuery] = useState(search_query);
  console.log('GrpahQl query')
  console.log(search_query_o)

    const { loading, error, data } = useQuery(SEARCH_ANIMES_BY_NAME, {
        variables: { search_query },
      });

    const navigate = useNavigate();

    if(!loading){
        console.log(data.searchAnimeByName);
    }
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return <p>Error : {error.message}</p>;

    // note: the id field is mandatory
    let anime_search_result = data.searchAnimeByName.map(function(ele){
        return {...ele,id:ele.animeId};
      })

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)

    //setSearchQuery(string);
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    //navigate("/")
    navigate('/anime/'.concat(item.animeId));
    
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
      <Text>{item.body}</Text>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.animeId}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.body}</span> */}
        {/* <Link to={'/anime/' + item.animeId }>
            <Text>{item.body}</Text>
        </Link> */}
        {/* <LinkRouter to= { '/anime/' + item.animeId }>
            <LinkOverlay>
                {item.body}
            </LinkOverlay>
        </LinkRouter> */}
        {/* <LinkRouter to= { '/anime/' + anime.id }>
            <LinkOverlay>
                {anime.titles[0].body}
            </LinkOverlay>
        </LinkRouter> */}
      </>
    )
  }

  return (
    //   <header className="App-header">
    //     <Heading as="h1" >Everything about your favorite anime is here!</Heading > 
    //     <div style={{ width: "100%" }}>
    //       <ReactSearchAutocomplete
    //         items={anime_search_result}
    //         onSearch={handleOnSearch}
    //         onHover={handleOnHover}
    //         onSelect={handleOnSelect}
    //         onFocus={handleOnFocus}
    //         autoFocus
    //         formatResult={formatResult}
    //         fuseOptions={{ keys: ["animeId", "body"] }}
    //         resultStringKeyName="body"
    //         placeholder="Enter the name of the anime"
    //       />
    //     </div>
    //   </header>

    <Flex direction='column' h="70vh" justify="center" align="center">
        <Spacer />
        <Center>
            <Heading as="h1" >Everything about your favorite anime is here!</Heading > 
        </Center>
        <Spacer />
        <Box flex='1' w="80%">
            <ReactSearchAutocomplete
                items={anime_search_result}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                fuseOptions={{ keys: ["animeId", "body"] }}
                resultStringKeyName="body"
                placeholder="Enter the name of the anime"
                maxResults='5'
                minMatchCharLength='3'
            />
        </Box>
        <Spacer />
        <Box flex='1' w="60%">
          <HStack spacing='24px'>
          <Box>
              <LinkRouter to={'/anime/'+animeProposition[0].animeId}><Text >{animeProposition[0].name}</Text></LinkRouter>
              <LinkRouter to={'/anime/'+animeProposition[1].animeId}><Text>{animeProposition[1].name}</Text></LinkRouter>
              <LinkRouter to={'/anime/'+animeProposition[2].animeId}><Text>{animeProposition[2].name}</Text></LinkRouter>
            </Box>
            <Box>
              <LinkRouter to={'/anime/'+animeProposition[3].animeId}><Text >{animeProposition[3].name}</Text></LinkRouter>
              <LinkRouter to={'/anime/'+animeProposition[4].animeId}><Text>{animeProposition[4].name}</Text></LinkRouter>
              <LinkRouter to={'/anime/'+animeProposition[5].animeId}><Text>{animeProposition[5].name}</Text></LinkRouter>
            </Box>
            <Box>
              <LinkRouter to={'/anime/'+animeProposition[6].animeId}><Text >{animeProposition[6].name}</Text></LinkRouter>
              <LinkRouter to={'/anime/'+animeProposition[7].animeId}><Text>{animeProposition[7].name}</Text></LinkRouter>
              <LinkRouter to={'/anime/'+animeProposition[8].animeId}><Text>{animeProposition[8].name}</Text></LinkRouter>
            </Box>
          </HStack>
        </Box>
        <Spacer />
    </Flex>
  )

//return(<div></div>)
}

export const SEARCH_ANIMES_BY_NAME = gql`
    query SearchAnime($search_query: String!){
        searchAnimeByName(input: {
          first: 20,
          query: $search_query
        }){
          animeId,
          body
        }
      }
`;

export default SearchComponent