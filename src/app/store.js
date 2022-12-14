import { configureStore } from '@reduxjs/toolkit'
import languageSlice from '../features/languageSlice'
import tokenSlice from '../features/oauth/tokenSlice'
import userSlice from '../features/oauth/userSlice'

export default configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
    language: languageSlice
  },
})