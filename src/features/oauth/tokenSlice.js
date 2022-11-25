import { createSlice } from '@reduxjs/toolkit'

const storageKey = "UserJwtToket"

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
      token: JSON.parse(localStorage.getItem(storageKey)),
    },
    reducers: {
      // updateToken, deleteToken
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
      updateToken: (state, action) => {
        return {
          ...state,
          value: action.payload
        }
      },
      destroyToken: (state) => {
        localStorage.clear(storageKey)
        return {
          ...state,
          value: null
        }
      }
    },
  })

export const { increment, decrement, incrementByAmount, updateToken, destroyToken } = tokenSlice.actions
export const isTokenExist = (state) => state.token.value != null
export const selectToken = (state) => state.token.value
  
export default tokenSlice.reducer