import { createSlice } from '@reduxjs/toolkit'

const defaultMainLang = "EN"
const defaultRootLang = "EN"

const storageMainLanguageKey = "MainLang"
const storageRootLanguageKey = "RootLang"

function getLangObj(){
    const mainLang = localStorage.getItem(storageMainLanguageKey)
    const constrootLang = localStorage.getItem(storageRootLanguageKey)

    return {
        main: mainLang != null ? mainLang : defaultMainLang,
        root: constrootLang != null ? constrootLang : defaultRootLang
    }
}

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
      value: getLangObj(),
    },
    reducers: {
      // updateMainLang, updateRootLang
      setMainLang: (state, action) => {
        localStorage.setItem(storageMainLanguageKey, action.payload)

        return {
          ...state,
          value: getLangObj()
        }
      },
      setRootLang: (state, action) => {
        localStorage.setItem(storageRootLanguageKey, action.payload)

        return {
          ...state,
          value: getLangObj()
        }
      },
    },
  })

export const { setMainLang, setRootLang } = languageSlice.actions
export const getMainLang = (state) => state.language.value.main
export const getRootLang = (state) => state.language.value.root
  
export default languageSlice.reducer