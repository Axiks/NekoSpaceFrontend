import { Heading, Stack, Wrap, WrapItem, Text, Center, Box, ButtonGroup, Link } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup, Spacer, Button } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Route,
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


// Define mutation
const LOGIN_MUTATION = gql`
  # Increments a back-end counter and gets its resulting value
  mutation IncrementCounter {
    currentValue
  }
`;


export default function LoginFormComponent(){
    return(
        <Stack spacing={4}>
            <Heading>Login page</Heading>
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
                color='gray.300'
                fontSize='1.2em'
                children='$'
                />
                <Input type='password' placeholder='Password' />
                <InputRightElement children={<MdCheckCircleOutline color='green.500' />} />
            </InputGroup>
            <Link>Forgot password</Link>

            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button>Login</Button>

            <Text>Are you still not with us? <LinkRouter to="/signUp"><Link>Sign up!</Link></LinkRouter></Text>
        </Stack>
    )
}