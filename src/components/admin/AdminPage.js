import {
    BrowserRouter as Router,
    Link  as LinkRouter
  } from "react-router-dom";
  import { useQuery, gql, useMutation } from '@apollo/client';
import { Card, CardBody, CardFooter, CardHeader, Heading, HStack, Icon, Image, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import Moment from 'moment';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FiCircle, FiCheckCircle, FiBookOpen, FiSlash, FiClock, FiX} from "react-icons/fi";



const All_AVAILABLE_OFFERTS = gql`
    query All_AVAILABLE_OFFERTS{
        animeTitle(where:{
            creatorUserId_not: null,
            isAcceptProposal: null
        }){
            nodes{
                id,
                body,
                anime{
                    id,
                    posters{
                        poster{
                            original
                        }
                    }
                    titles{
                        language,
                        body,
                        isMain
                    }
                }
                creatorUserId,
                createdAt
            }
        }
    }
`;


function setSelectMainName(titles){
    var animeName = titles.find(x => x.isMain === true);
    return animeName
  }

export function AdminPage(){
    Moment.locale('uk');
    // Бачити пропозиції
    // Прийняти, або відхилити пропозиції
    const { loading, error, data } = useQuery(All_AVAILABLE_OFFERTS);
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;

    console.log(data)

    return(
        <>
            <Heading>Admin pannel!</Heading>
            <Stack spacing='4'>
                {data.animeTitle.nodes.map(title => (
                    <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '160px' }}
                            src={title.anime.posters[0].poster.original}
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardHeader>
                                <LinkRouter to= { '/anime/' + title.anime.id }>
                                    <LinkOverlay>
                                        <Heading size='md'>{title.body}</Heading>
                                        <Heading size='sm' fontWeight='light'>{setSelectMainName(title.anime.titles).body}</Heading>
                                    </LinkOverlay>
                                </LinkRouter>
                            </CardHeader>
                            <CardBody>
                                
                                {/* <ProposalAcceptStatus isAcceptProposal={title.isAcceptProposal} /> */}
                                {/* <HStack>
                                    <Icon as={FiClock}></Icon>
                                    <Text>{Moment(title.createdAt).format('DD.MM.YY HH:MM')}</Text>
                                </HStack> */}
                                
                                {/* <Icon as={ title.isMain == true ? FiCheckCircle : FiCircle } color='green.500' /> */}
                                <HStack>
                                    <Icon as={FiClock}></Icon>
                                    <Text>{Moment(title.createdAt).format('DD.MM.YY HH:MM')}</Text>
                                </HStack>

                            </CardBody>
                            <CardFooter>
                                
                                {/* <ProposalAcceptStatus isAcceptProposal={title.isAcceptProposal} /> */}

                                <ButtonGroup spacing='2'>
                                    <Button colorScheme='teal' size='sm' leftIcon={<FiCheckCircle />}>
                                        Accept
                                    </Button>
                                    <Button colorScheme='teal' variant='outline' size='sm' leftIcon={<FiX />}>
                                        Reject
                                    </Button>
                                </ButtonGroup>
                                
                                {/* <Icon as={ title.isMain == true ? FiCheckCircle : FiCircle } color='green.500' /> */}

                            </CardFooter>
                        </Stack>
                    </Card>
                ))}
            </Stack>
        </>
    )
}

export default AdminPage;