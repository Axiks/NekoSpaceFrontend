import { Heading, Stack, Wrap, WrapItem, Text, Center, Box, ButtonGroup, Link } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup, Spacer, Button } from '@chakra-ui/react'
import { Grid, GridItem, Flex } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, SimpleGrid } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack
} from '@chakra-ui/react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Route,
  Link as LinkRouter
} from "react-router-dom";

import { useQuery, gql } from '@apollo/client';
import { AspectRatio } from '@chakra-ui/react'
import { 
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react'
import { FaBeer } from 'react-icons/fa';
import { MdAlternateEmail, MdCheckCircleOutline, MdPersonOutline } from "react-icons/md";
import SignUpFormComponent from './SignUpFormComponent'

export default function SignUpPageComponent(){
    return(
    <div>
        <Flex justify='space-around' align='center' h='80vh'>
          <SignUpFormComponent />
            <Box>
                <Text>About for site</Text>
            </Box>
          </Flex>
      </div>
    )
}