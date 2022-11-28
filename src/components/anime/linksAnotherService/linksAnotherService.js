import { Link } from '@chakra-ui/react'
import { TbExternalLink } from "react-icons/tb";


export function LinksAnotherServiceComponent(props){
    return(
        <>
            { props.linksToAnotherService.map(item => {
                return (
                <Link href={item.link} isExternal>
                    {item.label}<TbExternalLink mx='2px' />
                </Link>
                )
            })}
        </>
    )
}

export default LinksAnotherServiceComponent