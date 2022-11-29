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
import { Progress } from '@chakra-ui/react'

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

// function useSearchAnime(query){
//     console.log(query)
//     const { loading, error, data } = useQuery(SEARCH_ANIMES_BY_NAME, {
//         variables: { query },
//         });
//     if(!loading) console.log({ loading, error, data })
//     return { loading, error, data }
// }
//var search_query = "Toradora"

export function SearchComponent(){
  const navigate = useNavigate();
  const [search_query, setSearchQuery] = useState('Toradora');
  const { loading, error, data } = useQuery(SEARCH_ANIMES_BY_NAME, {
      variables: { search_query },
    });
    
    if (loading) return <Progress size='xs' isIndeterminate />
    if (error) return <p>Error : {error.message}</p>;

    // note: the id field is mandatory// Fix search result viewer
    let anime_search_result = data.searchAnimeByName.map(function(ele){
        return {...ele, id: ele.animeId};
      })

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
    if(string != '') setSearchQuery(string);
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
    <ReactSearchAutocomplete
      items={anime_search_result}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      inputSearchString={search_query}
      autoFocus
      formatResult={formatResult}
      fuseOptions={{ keys: ["animeId", "body"] }}
      resultStringKeyName="body"
      placeholder="Enter the name of the anime"
      maxResults='5'
      minMatchCharLength='3'
/>

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
  )
}

export default SearchComponent