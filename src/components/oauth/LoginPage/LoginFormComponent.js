import { Heading, Stack, Wrap, WrapItem, Text, Center, Box, ButtonGroup, Link } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup, Spacer, Button } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Route,
    useNavigate,
    Link as LinkRouter
  } from "react-router-dom";

import { useQuery, gql, useMutation  } from '@apollo/client';
import { 
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react'
import { MdAlternateEmail, MdCheckCircleOutline, MdPersonOutline } from "react-icons/md";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateToken, destroyToken } from '../../../features/oauth/tokenSlice'
import { isUserLogged, selectUser, updateUser } from '../../../features/oauth/userSlice'
import { useToast } from '@chakra-ui/react'

// Define mutation
const LOGIN_MUTATION = gql`
  # Increments a back-end counter and gets its resulting value
  mutation IncrementCounter {
    currentValue
  }
`;

export default function LoginFormComponent(){
    // console.log("TeST");
    // console.log(process.env.REACT_APP_URL);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toast = useToast()

    const userLogin = async (username, password) => {
        await fetch(process.env.REACT_APP_URL + '/api/Account/SignIn', {
            method: "POST", // default, so we can ignore
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if(data.status === 401) {
                console.log('Wrong password!')
                toast({
                    title: 'Wrong email or password.',
                    description: "Enter a valid email or password.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            else{
                dispatch(updateToken(JSON.stringify(data.token) || null))
                dispatch(updateUser())
                navigate("/me")
            }
   
        })
        .catch((err) => {
                console.log(err.message);
        });
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        userLogin(username, password);
     }; 

     const [show, setShow] = React.useState(false)
     const handleClick = () => setShow(!show)   

    return(
        <Stack spacing={4}>
            <Heading>Login page</Heading>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<MdPersonOutline />}
                />
                <Input
                    type='text'
                    placeholder='Nickname'
                    //value={username}
                    onChange={evt => setUsername(evt.target.value) }
                    />
            </InputGroup>

            <InputGroup size='md'>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                    />
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    ///value={password}
                    onChange={evt => setPassword(evt.target.value) }
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Link>Forgot password</Link>

            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button onClick={ handleSubmit }>Login</Button>

            <Text>Are you still not with us? <LinkRouter to="/signUp"><Link>Sign up!</Link></LinkRouter></Text>
        </Stack>
    )
}