import { Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { isUserLogged, selectUser } from '../features/oauth/userSlice'

// Можна брати MAIN мову з відповідною мовою інтерфейсу
// Прогрузити надаштування мови з Redux

export function MainTitleHelper(props){
    const nekoData = useSelector(selectUser)
    // console.log('User helper')
    // console.log(nekoData)

    var animeName = props.titles.filter(x => x.isMain === true).find(x => x.language === nekoData.mainLanguage);

    return(
        <>{animeName != null ? animeName.body : "NEKKKKKKKKKKKKKKOOOOOOOO"}</>
    )
  }

  export default MainTitleHelper