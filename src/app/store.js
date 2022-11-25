import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from '../features/oauth/tokenSlice'

export default configureStore({
  reducer: {
    token: tokenSlice
  },
})