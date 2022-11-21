import SimpleImageSlider from "react-simple-image-slider";
import { AspectRatio } from '@chakra-ui/react'

export function SliderComponent(props){
    return(
    <AspectRatio ratio={16 / 5}>
        <SimpleImageSlider
            width="100%"
            height="100%"
            images={props.images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={8.0}
        />
    </AspectRatio>)
}

export default SliderComponent;