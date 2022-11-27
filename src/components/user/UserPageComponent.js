import { Stack, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux'
import { isUserLogged, selectUser } from '../../features/oauth/userSlice'

export default function UserPageComponent(){
    const nekoData = useSelector(selectUser)

    return(
        <div>
            <Stack>
                <Text>User id: {nekoData.userid} </Text>
                <Text>User name: {nekoData.username} </Text>
                <Text>User email: {nekoData.email} </Text>
                <Text>Role: {nekoData.role} </Text>
            </Stack>
        </div>
    )
}