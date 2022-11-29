import { Box, HStack, Text } from "@chakra-ui/react"
import {
    BrowserRouter as Router,
    Route,
    redirect,
    useNavigate,
    Link as LinkRouter
  } from "react-router-dom";

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

export function PropositionAnimeComponent(){
    return(
        <>
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
        </>
    )
}

export default PropositionAnimeComponent()