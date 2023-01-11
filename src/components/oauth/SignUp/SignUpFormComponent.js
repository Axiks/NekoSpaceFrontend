import { Heading, Stack, Wrap, WrapItem, Text, Center, Box, ButtonGroup, Link } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup, Spacer, Button } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Route,
    Link as LinkRouter
  } from "react-router-dom";

import { useQuery, gql } from '@apollo/client';
import { 
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react'
import { MdAlternateEmail, MdCheckCircleOutline, MdPersonOutline } from "react-icons/md";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react'

export default function SignUpFormComponent(){
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toast = useToast()

    const userRegistration = async (email, password, confirmPassword, username) => {
        await fetch(process.env.REACT_APP_URL + '/api/Account/Registration', {
            method: "POST", // default, so we can ignore
            body: JSON.stringify({
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                username: username,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
        .then(response => response.json())
        .then(data => {
            if(data.errors.Email != null){
                toast({
                    title: 'Wrong data.',
                    description: data.errors.Email,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
                return
            }

            if(data.errors.Username != null){
                toast({
                    title: 'Wrong data.',
                    description: data.errors.Username,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
                return
            }

            if(data.errors.Password != null){
                toast({
                    title: 'Wrong data.',
                    description: data.errors.Password,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
                return
            }

            // if( data.errors != null && data.errors.Email == null && data.errors.Username == null && data.errors.Password == null ){
            //     toast({
            //         title: 'Wrong data.',
            //         description: data.errors,
            //         status: 'error',
            //         duration: 9000,
            //         isClosable: true,
            //     })
            //     return
            // }

            // toast({
            //     title: 'Success.',
            //     description: data.errors,
            //     status: 'success',
            //     duration: 9000,
            //     isClosable: true,
            // })

            console.log(data.errors)
        })
        .catch((err) => {
            console.log(err.message);
        });
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        userRegistration(email, password, password, username);
     }; 

    return(
        <Stack spacing={4}>
            <Heading>SignUp page</Heading>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<MdPersonOutline />}
                />
                <Input
                    type='text'
                    placeholder='Nickname'
                    onChange={evt => setUsername(evt.target.value) }
                   />
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<MdAlternateEmail />}
                />
                <Input
                    type='email'
                    placeholder='Email'
                    onChange={evt => setEmail(evt.target.value) }
                   />
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children='$'
                />
                <Input
                 type='password'
                  placeholder='Password'
                  onChange={evt => setPassword(evt.target.value) }
                   />
                <InputRightElement children={<MdCheckCircleOutline color='green.500' />} />
            </InputGroup>
            <Button onClick={handleSubmit}>SignUp</Button>

            <Text>Are you with us? <LinkRouter to="/login"><Link>Login!</Link></LinkRouter></Text>
        </Stack>
    )
}