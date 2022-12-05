import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link  as LinkRouter
  } from "react-router-dom";
  import { useQuery, gql, useMutation } from '@apollo/client';
import { Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Heading, HStack, Icon, Image, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import Moment from 'moment';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FiCircle, FiCheckCircle, FiBookOpen, FiSlash, FiClock, FiX} from "react-icons/fi";
import { MdLanguage } from 'react-icons/md';
import { Switch } from '@chakra-ui/react'

const UPDATE_ANIME_SUGGESTION_STATUS = gql`
mutation UpdateUserLibraryEntry($title_id: UUID!, $decision: DecisionVariants!){
    setDecisionTranslationProposal(input:{titleId: $title_id, decision: $decision})
	{
		animeTitle{
			id,
			mediaId,
			animeId,
			body,
			language,
			from
		}
	}
  }
`;

const UPDATE_ANIME_TITLE_MAIN_STATUS = gql`
mutation UpdateAnimeTitleMainStatus($title_id: UUID!, $is_main: Boolean!){
    setMainTitleInput(input: {titleId: $title_id, isMain: $is_main}){
		animeTitle{
			id,
			body,
			language,
			isOriginal,
			isAcceptProposal,
			language
		},
		error
	}
  }
`;

function setSelectMainName(titles){
    var animeName = titles.find(x => x.isMain === true);
    return animeName
  }

function OnMainSwitch(props){
    const [isMainSwitchValue, setMainSwitchValue] = useState(props.title.isMain);
    // console.log(props.title.isMain)
    // console.log(props.title)

    const [mutateFunction, { loading, error }] = useMutation(UPDATE_ANIME_TITLE_MAIN_STATUS);

    function onMain(titleId){
        console.log("Is main btn " + isMainSwitchValue + titleId)
        mutateFunction({variables: {title_id: titleId, is_main: !isMainSwitchValue }})
        setMainSwitchValue(!isMainSwitchValue)
    }

    return(
        <Switch onChange={() => onMain(props.title.id)} isDisabled={!props.isSwitchAvailable} defaultChecked={isMainSwitchValue} />
    )
}

export function TitleSuggestionListItemComponent(props){
    Moment.locale('uk');
    const [isAcceptButtonLoad, setAcceptButtonLoad] = useState(false);
    const [isRejectButtonLoad, setRejectButtonLoad] = useState(false);

    const [isAcceptButtonAvailable, setAcceptButtonAvailable] = useState(props.title.isAcceptProposal == null ? true : !props.title.isAcceptProposal);
    const [isRejectButtonAvailable, setRejectButtonAvailable] = useState(props.title.isAcceptProposal == null ? true : props.title.isAcceptProposal);

    const [isMainSwitchAvailable, setMainSwitchAvailable] = useState(props.title.isAcceptProposal == null ? false : true);


    const [mutateFunction, { data, loading, error, onCompleted }] = useMutation(UPDATE_ANIME_SUGGESTION_STATUS);
    if (error) return `Submission error! ${error.message}`;

    function onAccept(titleId){
        console.log("Accept btn " + titleId)
        setAcceptButtonLoad(true)
        setRejectButtonLoad(false)
        mutateFunction({variables: {title_id: titleId, decision: "ACCEPT" }})
        setAcceptButtonAvailable(false)
        setRejectButtonAvailable(true)

        setMainSwitchAvailable(true)
    }

    function onReject(titleId){
        console.log("Reject btn" + titleId)
        setAcceptButtonLoad(false)
        setRejectButtonLoad(true)
        mutateFunction({variables: {title_id: titleId, decision: "REJECT" }})
        setAcceptButtonAvailable(true)
        setRejectButtonAvailable(false)

        setMainSwitchAvailable(true)
    }


    return(
        <>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '160px' }}
                    src={props.title.anime.posters[0].poster.original}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardHeader>
                        <LinkRouter to= { '/anime/' + props.title.anime.id }>
                            <LinkOverlay>
                                <Heading size='md'>{props.title.body}</Heading>
                                <Heading size='sm' fontWeight='light'>{setSelectMainName(props.title.anime.titles).body}</Heading>
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
                            <Text>{Moment(props.title.createdAt).format('DD.MM.YY HH:MM')}</Text>
                        </HStack>
                        <HStack>
                            <Icon as={MdLanguage}></Icon>
                            <Text>{props.title.language}</Text>
                        </HStack>

                    </CardBody>
                    <CardFooter>
                        
                        {/* <ProposalAcceptStatus isAcceptProposal={title.isAcceptProposal} /> */}

                        <ButtonGroup spacing='2'>
                            <Button onClick={() => onAccept(props.title.id)} isLoading={ isAcceptButtonLoad && loading} colorScheme='teal' variant={isAcceptButtonAvailable ? "outline" : "solid"} size='sm' leftIcon={<FiCheckCircle />}>
                                Accept
                            </Button>
                            <Button onClick={() => onReject(props.title.id)} isLoading={isRejectButtonLoad && loading} colorScheme='teal' variant={isRejectButtonAvailable ? "outline" : "solid"} size='sm' leftIcon={<FiX />}>
                                Reject
                            </Button>
                        </ButtonGroup>
                        <FormControl display='flex' alignItems='center' >
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Is main
                            </FormLabel>
                            <OnMainSwitch title={props.title}  isSwitchAvailable={isMainSwitchAvailable} />
                        </FormControl>
                        {/* <Icon as={ title.isMain == true ? FiCheckCircle : FiCircle } color='green.500' /> */}

                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

export default TitleSuggestionListItemComponent