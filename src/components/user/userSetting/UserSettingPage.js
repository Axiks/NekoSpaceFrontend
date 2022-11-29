import { useQuery, gql, useMutation } from '@apollo/client';
import { Button, Heading, Image, Text, Textarea } from "@chakra-ui/react"
import React, { useState, useEffect } from 'react';


const GET_MORE_USER_SETTING_DATA = gql`
query Me{
    me{
        id,
        userName,
        email,
        about,
    }
}
`;

const UPDATE_USER_DATA = gql`
mutation UpdateUser($about: String){
    updateUser(input: {
        about: $about
    }) {
        user{
			id,
			about
		}
    }
  }
`;

export function UserSettingPage(){
    const [ nekoAbout, setNekoAbout ] = React.useState(null);

    const [mutateFunction, { updateData, updateLoading, updateError }] = useMutation(UPDATE_USER_DATA);
    const { loading, error, data } = useQuery(GET_MORE_USER_SETTING_DATA);
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Error! ${error}`;
    var nekoData = data.me

    function changeNekoAbout(e){
        console.log(e.target.value)
        setNekoAbout(e.target.value)
    }

    function sendNekoData(){
        console.log('Btn presss')
        mutateFunction({variables: {about: nekoAbout }})
    }

    return(
        <>
        {/* Висвітлити які сабе тайтли запропонував для перекладу */}

            <Heading size='md'> Setting </Heading>
            <Text>User name: {nekoData.userName} </Text>
            <Text>User id: {nekoData.id} </Text>
            <Text>User email: {nekoData.email} </Text>
            <Heading size='md'>About</Heading>
            <Textarea value={ nekoAbout == null ? nekoData.about : nekoAbout } onChange={changeNekoAbout}></Textarea>
            <Button isLoading= { updateLoading } onClick={ sendNekoData }>Save</Button>
        </>
    )
}

export default UserSettingPage