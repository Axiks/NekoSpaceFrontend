import { Heading, Stack, Spacer, Button, Center, Flex, Box, ButtonGroup, Avatar } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export function HeaderComponent() {
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
              <HeaderUserUnloggedComponent />
              {/* <HeaderUserLoggedComponent /> */}
            </Box>
          </Flex>
        </div>
    );
  }

  function HeaderUserUnloggedComponent(){
    return (
      <div className="HeaderUserUnlogged">
        <ButtonGroup gap='2'>
          <Link to="/login">
            <Button colorScheme='teal'>Login</Button>
          </Link>
          <Link to="/signUp">
            <Button colorScheme='teal'>SignUp</Button>
          </Link>
        </ButtonGroup>
      </div>
    );
  }

  function HeaderUserLoggedComponent(){
    return (
      <Menu>
        <MenuButton as={Button} colorScheme='teal'>
          <Stack direction='row' spacing='12px'>
            <Avatar size='sm' name='Neko User' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af07fb27-4ad9-486e-86bb-174fa595e55b/dct13m3-0ed196d9-08ed-48af-a61e-575ac3043070.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmMDdmYjI3LTRhZDktNDg2ZS04NmJiLTE3NGZhNTk1ZTU1YlwvZGN0MTNtMy0wZWQxOTZkOS0wOGVkLTQ4YWYtYTYxZS01NzVhYzMwNDMwNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3sOWxkGOYIpRd6ftLoUcfLnLygikRG23H-RDb_x-l54' />{' '}
            <Center>
              <Box>Neko User</Box>
            </Center>
          </Stack>
        </MenuButton>
        <MenuList>
          <MenuGroup title='Profile'>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Setting </MenuItem>
            <MenuItem>LogOut </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title='Help'>
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    );
  }

  export default HeaderComponent;