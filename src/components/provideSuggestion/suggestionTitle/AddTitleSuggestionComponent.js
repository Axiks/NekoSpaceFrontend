import { List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import AddTitleSuggestionFormComponent from "./AddTitleSuggestionFormComponent"
import { FiCircle, FiCheckCircle} from "react-icons/fi";
import { RiHome2Line, RiHome2Fill} from "react-icons/ri";
import React, { useState, useEffect } from 'react';


export function AddTitleSuggestionComponent(props){
    // Хочу доюаити елемент в ліст після натискання кнопки
    const [ suggestionsList, setSuggestionsList ] = React.useState(props.titles);

    function handleLanguageSuggestion(suggestionValue){
        var newSuggestionsList = [...suggestionsList, suggestionValue]
        setSuggestionsList(newSuggestionsList)
    }

    return(
        <div>
            <List spacing={3}>
                {suggestionsList.map(title=> (
                    <ListItem>
                        <Text>{ title.language }</Text>
                        <ListIcon as={ title.isMain == true ? FiCheckCircle : FiCircle } color='green.500' />
                        <ListIcon as={ title.isOriginal == true ? RiHome2Fill : RiHome2Line } color='orange.500' />
                        { title.body }
                    </ListItem>
                ))}
            </List>
            <AddTitleSuggestionFormComponent animeId={ props.animeId } onHandleLanguageSuggestion= {handleLanguageSuggestion} />
        </div>
    )
}

export default AddTitleSuggestionComponent