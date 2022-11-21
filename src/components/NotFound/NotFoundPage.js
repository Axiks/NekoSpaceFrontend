import { Image, AspectRatio, Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

export function NotFoundPageComponent() {
    return(
        <HStack spacing={12} direction='row' h='80vh'>
            <Heading as='h1'>404 not found</Heading>
            <Image src= 'https://i.gifer.com/origin/57/57daee03322d6f2dbc96fcc44ac867a6.gif'
                alt='Anime name'
                borderRadius='lg'
                objectFit='cover'
                />
        </ HStack>
    );
}