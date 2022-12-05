import { Box, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { setMainLang, setRootLang, getMainLang, getRootLang } from '../features/languageSlice'

// Можна брати MAIN мову з відповідною мовою інтерфейсу
// Прогрузити надаштування мови з Redux

export function MainTitleHelper(props){
    const nekoLang = useSelector(getMainLang)

    var animeName = props.titles.filter(x => x.isMain === true).find(x => x.language === nekoLang);

    return(
        <Box>{animeName != null ? animeName.body : null}</Box>
    )
  }

  export default MainTitleHelper