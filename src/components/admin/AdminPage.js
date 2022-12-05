import {
    BrowserRouter as Router,
    Link  as LinkRouter
  } from "react-router-dom";
  import { useQuery, gql, useMutation } from '@apollo/client';
import { Card, CardBody, CardFooter, CardHeader, Heading, HStack, Icon, Image, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import Moment from 'moment';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FiCircle, FiCheckCircle, FiBookOpen, FiSlash, FiClock, FiX} from "react-icons/fi";
import  TitleNewSuggestionListComponent  from "./TitleSuggestion/TitleNewSuggestionListComponent";
import TitleResolvedSuggestionListComponent from "./TitleSuggestion/TitleResolvedSuggestionListComponent";


export function AdminPage(){
    return(
        <>
            <Heading>Admin pannel</Heading>
            <Heading>Available new proposition</Heading>
            <TitleNewSuggestionListComponent />
            <Heading>Resolved proposals</Heading>
            <TitleResolvedSuggestionListComponent />
        </>
    )
}

export default AdminPage;