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
      animeId:"684b81a2-638a-4fa0-a014-bcab3af25d08",
      name:"Toradora"
    },
    {
      animeId:"32664d4c-a553-437a-b2df-1d3b9fe5b1e3",
      name:"Clannad"
    },
    {
      animeId:"a1fa97d2-73d3-46d7-840a-3e1da055e8c0",
      name:"Welcome to NHK"
    },
    {
      animeId:"1a103d61-ec9e-47cc-b7e3-a3eadb4a8fdc",
      name:"Spy x Family Part 2"
    },
    {
      animeId:"4bf44f2c-b1e1-48f5-b5e9-31f841306480",
      name:"Tensei shitara Ken Deshita"
    },
    {
      animeId:"d6fa41f4-4c7b-4a70-a9df-65d965aba01a",
      name:"Akuyaku Reijou nano de Last Boss wo Kattemimashita"
    },
    {
      animeId:"3d9a4bfe-b067-43a7-9884-3bdd9d6e4e93",
      name:"Bocchi the Rock!"
    },
    {
      animeId:"66cb6a23-2ce2-4747-9ee8-3d61b50ece3b",
      name:"Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau"
    },
    {
      animeId:"6b2d9395-53c6-49b4-ba92-daff325e27b1",
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