import { Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Button, Text } from "@chakra-ui/react";
import { FiCircle, FiCheckCircle, FiBookOpen, FiSlash, FiClock, FiX, FiGlobe} from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import { setMainLang, setRootLang, getMainLang, getRootLang } from '../../features/languageSlice'
import React , { useState } from "react";


export function HeaderSelectLanguageComponent(){
    const nekoMainLang = useSelector(getMainLang)
    const nekoRootLang = useSelector(getRootLang)

    const [mainLanguage, setMainLanguage] = useState(nekoMainLang);
    const [rootLanguage, setRootLanguage] = useState(nekoRootLang);

    const dispatch = useDispatch();

    function selectMainLanguage(lang){
        console.log("Select main lang: " + lang)
        dispatch(setMainLang(lang))
        setMainLanguage(lang)
    }

    function selectRootLanguage(lang){
        console.log("Select root lang: " + lang)
        dispatch(setRootLang(lang))
        setRootLanguage(lang)
    }

    return(

        <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon={<FiGlobe />} >
            <Text>{mainLanguage}/{rootLanguage}</Text>
            </MenuButton>
            <MenuList minWidth='240px'>
                <MenuOptionGroup onChange= {(val)=>selectMainLanguage(val)} defaultValue={mainLanguage} title='Main language' type='radio'>
                    <MenuItemOption value='UK'>Ukrainian</MenuItemOption>
                    <MenuItemOption value='PL'>Polish</MenuItemOption>
                    <MenuItemOption value='IT'>Italian</MenuItemOption>
                    <MenuItemOption value='EN'>English</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup onChange= {(val)=>selectRootLanguage(val)} defaultValue={rootLanguage} title='Seccond language' type='radio'>
                    <MenuItemOption value='EN'>English</MenuItemOption>
                    <MenuItemOption value='JP'>Japanese</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}

export default HeaderSelectLanguageComponent