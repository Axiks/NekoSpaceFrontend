import {
BrowserRouter as Router,
Route,
redirect,
useNavigate,
Link as LinkRouter
} from "react-router-dom";

import { Stack, Button, Center, Avatar, Box } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { isUserLogged, selectUser } from '../../features/oauth/userSlice'


function HeaderUserLoggedComponent(){
  const isNekoLogged = useSelector(isUserLogged)
  const nekoData = useSelector(selectUser)

    return (
      <Menu>
        <MenuButton as={Button} colorScheme='teal'>
          <Stack direction='row' spacing='12px'>
            <Avatar size='sm' name='Neko User' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af07fb27-4ad9-486e-86bb-174fa595e55b/dct13m3-0ed196d9-08ed-48af-a61e-575ac3043070.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmMDdmYjI3LTRhZDktNDg2ZS04NmJiLTE3NGZhNTk1ZTU1YlwvZGN0MTNtMy0wZWQxOTZkOS0wOGVkLTQ4YWYtYTYxZS01NzVhYzMwNDMwNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3sOWxkGOYIpRd6ftLoUcfLnLygikRG23H-RDb_x-l54' />{' '}
            <Center>
              <Box>{nekoData.username || 'undefined'}</Box>
            </Center>
          </Stack>
        </MenuButton>
        <MenuList>
          <MenuGroup title='Profile'>
            <LinkRouter to='me'><MenuItem>My Account</MenuItem></LinkRouter>
            <LinkRouter to='me/setting'><MenuItem>Setting</MenuItem></LinkRouter>
            <LinkRouter to='logOut'><MenuItem>LogOut</MenuItem></LinkRouter>
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

  export default HeaderUserLoggedComponent