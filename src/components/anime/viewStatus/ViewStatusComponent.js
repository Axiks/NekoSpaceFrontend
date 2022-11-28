import React, { useState, useEffect } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading, Text, Link } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { MdFavoriteBorder, MdFavorite} from "react-icons/md";
import { Select } from '@chakra-ui/react'


const UPDATE_ANIME_VIEW_STATUS = gql`
mutation updateUserLibraryEntry($anime_id: UUID!, $view_status: UserViewStatus){
    updateUserLibraryEntry(input: {
        animeId: $anime_id,
        viewStatus: $view_status,
    }) {
        error
    }
  }
`;

const watchOptions = [
      { value: 'WATCHING', label: 'WATCHING' },
      { value: 'COMPLETED', label: 'COMPLETED' },
      { value: 'ON_HOLD', label: 'ON HOLD' },
      { value: 'DROPPED', label: 'DROPPED' },
      { value: 'PLAN_TO_WATCH', label: 'PLAN TO WATCH' }
    ];

export function ViewStatusComponent(props){
    const [watchStatus, setWatchStatus] = React.useState(props.viewStatus);
    // User Id, Initial status
    const [mutateFunction, { data, loading, error }] = useMutation(UPDATE_ANIME_VIEW_STATUS);
    if (error) return `Submission error! ${error.message}`;

    function selectWatchStatus(e){
        console.log(e.target.value)
        setWatchStatus(e.target.value)
        mutateFunction({variables: {anime_id: props.animeId, view_status: e.target.value }})
    }

    return(
        // Якщо у даного користувача вказанй статус, то показати його
        // При зміні айтему - змінювати значення
        // Випадаючий список з позначеною властивістью за замовчуванням
        <div>
            <Select name='user_view_status' placeholder='Select option' value={ watchStatus } onChange={selectWatchStatus} >
            { watchOptions.map(item => {
                return (<option key={item.value} value={item.value}>{item.label}</option>);
            }) }
            </Select>
        </div>
    )
}

export default ViewStatusComponent