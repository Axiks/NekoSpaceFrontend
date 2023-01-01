import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    Textarea,
  } from '@chakra-ui/react'
  import { Stack, Input } from '@chakra-ui/react'
  import { Select } from '@chakra-ui/react'
  import React, { useState, useEffect } from 'react';
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { useQuery, gql, useMutation } from '@apollo/client';



const languages = [
    { value: 'EN', label: 'English' },
    { value: 'UK', label: 'Ukrainian' },
    { value: 'PL', label: 'Polish' },
    { value: 'JA', label: 'Japanese' },
]

const source = [
    'My',
    'External Resource'
]

const CREATE_TRANSLATION_PROPOSAL = gql`
mutation CreateTranslationProposalSynopsis($anime_id: UUID!, $proposition: String!, $language: Languages!){
    createTranslationProposalSynopsis(input: {
        animeId: $anime_id,
        proposition: $proposition,
        language: $language
    }) {
        isSucces
    }
  }
`;

export function AddSynopsisSuggestionFormComponent(props){
    const [ languageSelected, setlanguage ] = React.useState(languages[0]);
    const [ suggestionBody, setSuggestionBody ] = React.useState('');

    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_TRANSLATION_PROPOSAL);
    if (error) return `Submission error! ${error.message}`;

    function changeSelectedLanguage(e){
        console.log(e.target.value)
        setlanguage(e.target.value)
    }

    function changeSuggestionBody(e){
        console.log(e.target.value)
        setSuggestionBody(e.target.value)
    }

    function sendSuggestion(){
        console.log('Btn press')
        mutateFunction({variables: {anime_id: props.animeId, proposition: suggestionBody, language: languageSelected }})
        props.onHandleLanguageSuggestion({ body: suggestionBody, language: languageSelected }); 
    }

    return(
        <>
            <Stack spacing={3}>
                <Select placeholder='Language' size='md' value={ languageSelected } onChange={ changeSelectedLanguage } >
                    { languages.map(item => {
                        return (
                            <option  value={ item.value } >{ item.label }</option>
                        )
                    })}
                </Select>
                <Textarea placeholder='Title name' size='md' value= { suggestionBody} onChange={ changeSuggestionBody } />
                <Select placeholder='Source' size='md' >
                    { source.map(item => {
                        return (
                            <option  value={ item } >{item}</option>
                        )
                    })}
                </Select>
                <Input placeholder='Link' size='md' />
                <Button colorScheme='teal' size='md' onClick={ sendSuggestion }>
                    Send
                </Button>
            </Stack>
        </>
    )
}

export default AddSynopsisSuggestionFormComponent