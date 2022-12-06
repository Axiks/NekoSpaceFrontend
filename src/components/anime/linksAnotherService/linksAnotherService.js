import { HStack, Link, Stack, Text } from '@chakra-ui/react'
import { TbExternalLink } from "react-icons/tb";


export function LinksAnotherServiceComponent(props){
    return(
        <HStack>
            { props.linksToAnotherService.map(item => {
                return (
                <Link href={item.link} isExternal>
                    <HStack>
                        <Text>{item.label}</Text>
                        <TbExternalLink mx='2px' />
                    </HStack>
                </Link>
                )
            })}
        </HStack>
    )
}

export default LinksAnotherServiceComponent