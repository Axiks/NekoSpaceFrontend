import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import AddTitleSuggestionFormComponent from "../suggestionTitle/AddTitleSuggestionFormComponent"
import { FiCircle, FiCheckCircle} from "react-icons/fi";
import { RiHome2Line, RiHome2Fill} from "react-icons/ri";
import React, { useState, useEffect } from 'react';
import AddSynopsisSuggestionFormComponent from "./AddSynopsisSuggestionFormComponent";

export function AddSynopsisSuggestionComponent(props){
    // Хочу доюаити елемент в ліст після натискання кнопки
    const [ suggestionsList, setSuggestionsList ] = React.useState(props.synopsis_list);

    function handleLanguageSuggestion(suggestionValue){
        var newSuggestionsList = [...suggestionsList, suggestionValue]
        setSuggestionsList(newSuggestionsList)
    }

    return (
        <Box>
            <List spacing={3}>
                {suggestionsList.map(title=> (
                    <ListItem>
                        <Text>{ title.language }</Text>
                        <ListIcon as={ title.isOriginal == true ? FiCheckCircle : FiCircle } color='green.500' />
                        <ListIcon as={ title.isMain == true ? RiHome2Fill : RiHome2Line } color='orange.500' />
                        { title.body }
                    </ListItem>
                ))}
            </List>
            <AddSynopsisSuggestionFormComponent animeId={ props.animeId } onHandleLanguageSuggestion= {handleLanguageSuggestion} />
        </Box>
    )
}

export default AddSynopsisSuggestionComponent