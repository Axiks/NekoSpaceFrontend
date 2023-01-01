import { Heading, Stack, Spacer, Button, Center, Flex, Box, ButtonGroup, Avatar, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import HeaderUserLoggedComponent from './HeaderUserLoggedComponent'
import HeaderUserUnloggedComponent from './HeaderUserUnloggedComponent'
import { useSelector, useDispatch } from 'react-redux'
import { updateToken, destroyToken, isTokenExist } from '../../features/oauth/tokenSlice'
import { isUserLogged, selectUser } from '../../features/oauth/userSlice'
import HeaderSelectLanguageComponent from './HeaderSelectLanguageComponent';


export function HeaderComponent() {
  // const isNekoLogged =  useSelector(isTokenExist)
  const isNekoLogged = useSelector(isUserLogged)

    return (
        <div className="AppHeader">
          <Flex minWidth='max-content' alignItems='center' gap='2' h='60px'>
            <Box p='2'>
              <Heading size='md'>Neko3Space</Heading>
            </Box>
            <Box>
              <Stack direction='row' spacing='12px'>
                 <Link to="/">
                  <Button colorScheme='teal' variant='ghost'>Home</Button>
                </Link>
                {/* <Link to="/anime">
                  <Button colorScheme='teal' variant='ghost'>Anime</Button>
                </Link>
                <Link to="/character">
                  <Button colorScheme='teal' variant='ghost'>Character</Button>
                </Link> */}
              </Stack>
            </Box>
            <Spacer />
            <Spacer />
            <Box>
              <HeaderSelectLanguageComponent />
            </Box>
            <Spacer />
            <Box>
              { isNekoLogged == false ? <HeaderUserUnloggedComponent /> : <HeaderUserLoggedComponent /> }
            </Box>
          </Flex>
        </div>
    );
  }

  export default HeaderComponent;