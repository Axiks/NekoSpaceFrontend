import { Image } from '@chakra-ui/react'
import { Gallery } from "react-grid-gallery";
import { useState } from "react";


const IMAGES_LIST = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
    },
 ];

function setAnimePosterImages(animePosters){
    var images = []
    animePosters.forEach(getAnimePosters);

    function getAnimePosters(item){
        images.push( {
            src: item.poster.original,
            isSelected: false
        })
    }

    images.push({
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",

        isSelected: true
     })

    return images
}

const ImageComponent = (props) => {  
    const { src, alt, style, title } = props.imageProps;
    var stylee = { ...style, textAlign: "center" }
    
    return <Image borderRadius='10px' alt={alt} src={src} title={title || ""} style={stylee} />;
};
 

export function SuggestionPostersComponent(props){
    const animeImages = setAnimePosterImages(props.animePosters);

    const [images, setImages] = useState(animeImages);

    const handleSelect = (index) => {
        const nextImages = images.map((image, i) =>
          i === index ? { ...image, isSelected: !image.isSelected } : { ...image, isSelected: false }
        );
        setImages(nextImages);
      };

    return(
        <div>
            <Gallery images={ images } onSelect={handleSelect} thumbnailImageComponent={ImageComponent} />
        </div>
    )
}

export default SuggestionPostersComponent