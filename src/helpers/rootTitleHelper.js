import { Box, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { setMainLang, setRootLang, getMainLang, getRootLang } from '../features/languageSlice'

export function RootTitleHelper(props){
    const nekoLang = useSelector(getRootLang)

    var animeName = props.titles.filter(x => x.isMain === true).find(x => x.language === nekoLang);

    return(
        <Box>{animeName != null ? animeName.body : null }</Box>
    )
  }

  export default RootTitleHelper