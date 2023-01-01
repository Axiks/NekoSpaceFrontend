import { useQuery, gql, useMutation } from '@apollo/client';
import { AspectRatio, Box, Button, Heading, HStack, Icon, Image, LinkOverlay, ListIcon, Stack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { FiCircle, FiCheckCircle, FiBookOpen, FiSlash, FiClock} from "react-icons/fi";
import { RiHome2Line, RiHome2Fill} from "react-icons/ri";
import Moment from 'moment';
import {
    BrowserRouter as Router,
    Route,
    Link as LinkRouter
  } from "react-router-dom";
import MainTitleHelper from '../../../helpers/mainTitleHelper';
import RootTitleHelper from '../../../helpers/rootTitleHelper';


const GET_USER_ANIME_PROPOSAL = gql`
query AnimeTitle($user_id: UUID!){
    animeTitle(
        where:{
            creatorUserId: $user_id
        },
        order: {
			updatedAt: DESC
		}
    ){
		nodes{
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
					isMain,
					isAcceptProposal
				}
			}
            isMain,
            isOriginal,
			creatorUserId,
            isAcceptProposal,
			createdAt
		}
	}
  }
`;

function ProposalAcceptStatus(props){
    var isAcceptProposal = props.isAcceptProposal
    var proposalOnProgress = <HStack>
        <Icon as={FiBookOpen}></Icon>
        <Text>Offer under processing</Text> 
    </HStack>
    var proposalAccept = <HStack>
        <Icon as={FiCheckCircle} color='green.500' ></Icon>
        <Text>Proposal Accept</Text> 
    </HStack>
    var proposalUnAccept = <HStack>
        <Icon as={FiSlash} color='red.500' ></Icon>
        <Text>Proposal Unaccept</Text> 
    </HStack>
    if(isAcceptProposal === null) return proposalOnProgress
    if(isAcceptProposal === true) {
        return proposalAccept
    }
    else{
        return proposalUnAccept
    }
}

function setSelectMainName(titles){
    var animeName = titles.find(x => x.isMain === true);
    return animeName
  }

export function UserSuggestionTitleListComponent(props){
    Moment.locale('uk');
    var user_id = props.userId
    const { loading, error, data } = useQuery(GET_USER_ANIME_PROPOSAL, {
        variables: { user_id },
      });
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;

    return(
        <>
            <Stack spacing='4'>
                {data.animeTitle.nodes.map(title => (
                    <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '120px' }}
                            src={title.anime.posters[0].poster.original}
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardHeader>
                                <LinkRouter to= { '/anime/' + title.anime.id }>
                                    <LinkOverlay>
                                        <Heading size='md'>{title.body}</Heading>
                                        <Heading size='sm' fontWeight='light'><RootTitleHelper titles={title.anime.titles} /></Heading>
                                    </LinkOverlay>
                                </LinkRouter>
                            </CardHeader>
                            <CardBody>
                                
                                <ProposalAcceptStatus isAcceptProposal={title.isAcceptProposal} />
                                <HStack>
                                    <Icon as={FiClock}></Icon>
                                    <Text>{Moment(title.createdAt).format('DD.MM.YY HH:MM')}</Text>
                                </HStack>
                                
                                {/* <Icon as={ title.isMain == true ? FiCheckCircle : FiCircle } color='green.500' /> */}

                            </CardBody>
                        </Stack>
                    </Card>
                ))}
            </Stack>
        </>
    )
}

export default UserSuggestionTitleListComponent