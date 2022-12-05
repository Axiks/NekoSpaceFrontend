import {
    BrowserRouter as Router,
    Link  as LinkRouter
  } from "react-router-dom";
  import { useQuery, gql, useMutation } from '@apollo/client';
import { Card, CardBody, CardFooter, CardHeader, Heading, HStack, Icon, Image, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import Moment from 'moment';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FiCircle, FiCheckCircle, FiBookOpen, FiSlash, FiClock, FiX} from "react-icons/fi";
import TitleSuggestionListItemComponent from "./TitleSuggestionListItemComponent";



const All_AVAILABLE_OFFERTS = gql`
    query All_AVAILABLE_OFFERTS{
        animeTitle(where:{
            creatorUserId_not: null,
            isAcceptProposal: null
        }){
            nodes{
                id,
                body,
                language,
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
                creatorUserId,
                createdAt
            }
        }
    }
`;

export function TitleNewSuggestionListComponent(){
    // Бачити пропозиції
    // Прийняти, або відхилити пропозиції
    const { loading, error, data } = useQuery(All_AVAILABLE_OFFERTS);
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;

    console.log(data)

    return(
        <>
            <Stack spacing='4'>
                {data.animeTitle.nodes.map(title => (
                    <TitleSuggestionListItemComponent title= {title} />
                ))}
            </Stack>
        </>
    )
}

export default TitleNewSuggestionListComponent;