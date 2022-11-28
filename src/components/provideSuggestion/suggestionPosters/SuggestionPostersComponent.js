import { Image } from '@chakra-ui/react'


export function SuggestionPostersComponent(props){
    return(
        <>
            { props.animePosters.map(item => {
                return (
                    <Image
                        src= { item.poster.original }
                        alt='Anime name'
                        borderRadius='lg'
                        objectFit='cover'
                        width='10%'
                        fallbackSrc='https://i.kym-cdn.com/photos/images/original/000/290/992/0aa.jpg'
                    />
                )
            })}
        </>
    )
}

export default SuggestionPostersComponent