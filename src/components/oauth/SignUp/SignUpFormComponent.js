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

export default function SignUpFormComponent(){
    return(
        <Stack spacing={4}>
            <Heading>SignUp page</Heading>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<MdPersonOutline />}
                />
                <Input type='text' placeholder='Nickname' />
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<MdAlternateEmail />}
                />
                <Input type='email' placeholder='Email' />
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children='$'
                />
                <Input type='password' placeholder='Password' />
                <InputRightElement children={<MdCheckCircleOutline color='green.500' />} />
            </InputGroup>
            <Button>SignUp</Button>

            <Text>Are you with us? <LinkRouter to="/login"><Link>Login!</Link></LinkRouter></Text>
        </Stack>
    )
}