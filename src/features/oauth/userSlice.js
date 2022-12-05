import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";
import { useQuery, gql, useMutation } from '@apollo/client';


const storageKey = "UserJwtToket"

const GET_USER_DATA_FROM_API = gql`
{
  me{
		id,
		userName,
		email,
		about,
		favoriteAnimes{
			anime{
				id
			}
		},
		ratingAnimes{
			anime{
				id
			}
		},
		animeViewingStatuses{
			anime{
				id
			}
		}
	}
}
`;

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      value: getUserData(),
    },
    reducers: {
      updateUser: (state) => {
        return {
          ...state,
          value: getUserData()
        }
      }
    },
  })

function getUserData(){
    const token = JSON.parse(localStorage.getItem(storageKey))
    const isTokenExist = token != null

    if(isTokenExist){
        var decoded = jwt_decode(token);

        var userDataFromTocken = {
            userid: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
            username: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
            email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
            role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
            exp: decoded['exp'],
        }
        return userDataFromTocken
    }
    return null
}

export const { updateUser } = userSlice.actions
export const isUserLogged = (state) => state.user.value != null
export const selectUser = (state) => state.user.value
  
export default userSlice.reducer