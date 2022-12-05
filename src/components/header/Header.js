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
import { FiCircle, FiCheckCircle, FiBookOpen, FiSlash, FiClock, FiX, FiGlobe} from "react-icons/fi";


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
                <Link to="/anime">
                  <Button colorScheme='teal' variant='ghost'>Anime</Button>
                </Link>
                <Link to="/character">
                  <Button colorScheme='teal' variant='ghost'>Character</Button>
                </Link>
              </Stack>
            </Box>
            <Spacer />
            <Box>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} rightIcon={<FiGlobe />} >
                UK/JP
              </MenuButton>
              <MenuList minWidth='240px'>
                <MenuOptionGroup defaultValue='uk' title='Main language' type='radio'>
                  <MenuItemOption value='uk'>Ukrainian</MenuItemOption>
                  <MenuItemOption value='pl'>Polish</MenuItemOption>
                  <MenuItemOption value='it'>Italian</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup defaultValue='jp' title='Seccond language' type='radio'>
                  <MenuItemOption value='eng'>English</MenuItemOption>
                  <MenuItemOption value='jp'>Japanese</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            </Box>
            <Box>
              { isNekoLogged == false ? <HeaderUserUnloggedComponent /> : <HeaderUserLoggedComponent /> }
            </Box>
          </Flex>
        </div>
    );
  }

  export default HeaderComponent;