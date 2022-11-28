import React, { useState, useEffect } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import ReactStars from "react-rating-stars-component";

const UPDATE_ANIME_RATING = gql`
mutation updateUserLibraryEntry($anime_id: UUID!, $rating_value: Float){
    updateUserLibraryEntry(input: {
        animeId: $anime_id,
        ratingValue: $rating_value,
    }) {
        error
    }
  }
`;

export function RatingComponent(props){
    const [animeRating, setanimeRating] = React.useState(props.userRating);

    const [mutateFunction, { data, loading, error }] = useMutation(UPDATE_ANIME_RATING);
    if (error) return `Submission error! ${error.message}`;

    function setAnimeRatingChange(newRating){
        console.log(newRating);
        setanimeRating(newRating)
        mutateFunction({variables: {anime_id: props.animeId, rating_value: newRating }})
    }

    return (
    <div>
        <ReactStars
            count={5}
            isHalf={true}
            onChange={setAnimeRatingChange}
            size={36}
            value={ animeRating }
            activeColor="#ffd700"
          />
    </div>
    )
}

export default RatingComponent