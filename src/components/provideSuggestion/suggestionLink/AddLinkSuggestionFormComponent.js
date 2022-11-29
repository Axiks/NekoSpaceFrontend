import { Stack, Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useQuery, gql, useMutation } from '@apollo/client';
import { Textarea } from '@chakra-ui/react'

// Походе це типу тип лінку (Опенінг, сайт пов`язаним з ним ітп )
const types = [
    { value: 'Und1', label: 'Site' },
    { value: 'Und2', label: 'Official source' },
    { value: 'Und3', label: 'Another database' },
    { value: 'Und4', label: 'Forum' },
    { value: 'Und4', label: 'Other' },
]

export function AddLinkSuggestionFormComponent(){
    const [ typeSelected, setType ] = React.useState(types[0]);
    const [ linkBody, setLinkBody ] = React.useState('');
    const [ descriptionBody, setDescriptioBody ] = React.useState('');

    function changeType(e){
        console.log(e.target.value)
        setType(e.target.value)
    }

    function changeLinkBody(e){
        console.log(e.target.value)
        setLinkBody(e.target.value)
    }

    function changeDescriptionBody(e){
        console.log(e.target.value)
        setDescriptioBody(e.target.value)
    }

    function sendSuggestion(){
        console.log('Btn press')
        //mutateFunction({variables: {anime_id: props.animeId, proposition: suggestionBody, language: languageSelected }})
        //props.onHandleLanguageSuggestion({ body: suggestionBody, language: languageSelected }); 
    }

    return(
        <>
            <Stack spacing={3}>
                <Select placeholder='Type' size='md' value={ typeSelected } onChange={ changeType} >
                    { types.map(item => {
                        return (
                            <option  value={ item.value } >{ item.label }</option>
                        )
                    })}
                </Select>
                <Input placeholder='Link' size='md' value= { linkBody} onChange={ changeLinkBody } />
                <Textarea placeholder='Description' value= { descriptionBody} onChange={ changeDescriptionBody } size='md' />
                <Button colorScheme='teal' size='md' onClick={ sendSuggestion }>
                    Send
                </Button>
            </Stack>
        </>
    )
}

export default AddLinkSuggestionFormComponent