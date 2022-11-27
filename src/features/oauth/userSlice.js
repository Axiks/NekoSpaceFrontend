import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";

const storageKey = "UserJwtToket"

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

        var iserDataFromTocken = {
            userid: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
            username: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
            email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
            role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
            exp: decoded['exp']
        }
        return iserDataFromTocken
    }
    return null
}

export const { updateUser } = userSlice.actions
export const isUserLogged = (state) => state.user.value != null
export const selectUser = (state) => state.user.value
  
export default userSlice.reducer