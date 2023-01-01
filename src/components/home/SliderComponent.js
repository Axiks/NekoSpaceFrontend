import SimpleImageSlider from "react-simple-image-slider";
import { AspectRatio } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Route,
    useNavigate,
    Link as LinkRouter
  } from "react-router-dom";

export function SliderComponent(props){
    const navigate = useNavigate();
    

    function onSliderClick(slideNum){
        console.log("Slider click")
        var animeId = props.images[slideNum].animeId
        console.log(animeId)
        navigate("/anime/"+animeId)
    }

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
            onClick={onSliderClick}
        />
    </AspectRatio>)
}

export default SliderComponent;