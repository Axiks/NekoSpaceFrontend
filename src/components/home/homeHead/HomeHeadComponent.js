import { Center, Flex, Heading, Spacer, Box } from "@chakra-ui/react"
import { PropositionAnimeComponent } from "./PropositionAnimeComponent"
import SearchComponent from "./SearchComponent"

export function HomeHeadComponent(){
    return(
        <Flex direction='column' h="70vh" justify="center" align="center">
            <Spacer />
            <Center>
                <Heading as="h1" >Everything about your favorite anime is here!</Heading > 
            </Center>
            <Spacer />
            <Box flex='1' w="80%">
                <SearchComponent />
            </Box>
            <Spacer />
            <PropositionAnimeComponent />
            <Spacer />
        </Flex>
    )
}

export default HomeHeadComponent()