import React, { useState, useEffect } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading, Text, Link } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { MdFavoriteBorder, MdFavorite} from "react-icons/md";


const UPDATE_ANIME_FAVORITE_STATUS = gql`
mutation UpdateUserLibraryEntry($anime_id: UUID!, $is_favorite: Boolean){
    updateUserLibraryEntry(input: {
        animeId: $anime_id,
        isFavorite: $is_favorite,
    }) {
        error
    }
  }
`;

export function FavoriteButtonComponent(props){
    const [isAnimeFavorite, setAnimeFavorite] = useState(props.isFavoriteStatus);
    const [mutateFunction, { data, loading, error }] = useMutation(UPDATE_ANIME_FAVORITE_STATUS);
    if (error) return `Submission error! ${error.message}`;

    function clickBtn(){
        mutateFunction({variables: {anime_id: props.animeId, is_favorite: !isAnimeFavorite }})
        setAnimeFavorite(!isAnimeFavorite)
    }

    return(
        <div>
            <Button isLoading={ loading } leftIcon={isAnimeFavorite ? <MdFavoriteBorder /> : <MdFavorite />} onClick={ clickBtn }>
                { isAnimeFavorite ? 'Not Favorite' : 'Make Favorite' }
            </Button>
        </div>
    )
}

export default FavoriteButtonComponent