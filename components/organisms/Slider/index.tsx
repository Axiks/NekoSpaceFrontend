import { useRef } from 'react';
import type { FC, Key } from 'react';
import type SlickSlider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'baseui/icon';
import {
  SliderContainer,
  ControlsContainer,
  StyledSlider,
  Slide
} from './styles';

export interface ISliderProps {
  slides: {
    id: Key;
    content: JSX.Element;
  }[];
}

const Slider: FC<ISliderProps> = ({ slides }) => {
  const sliderRef = useRef<SlickSlider>();

  return (
    <SliderContainer>
      <StyledSlider
        ref={sliderRef}
        dots
        infinite
        autoplay
        autoplaySpeed={5000}
        appendDots={dots => (
          <ControlsContainer>
            <ArrowLeft
              className="slick-arrow custom-arrow custom-arrow-prev"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <ul>{dots}</ul>
            <ArrowRight
              className="slick-arrow custom-arrow custom-arrow-next"
              onClick={() => sliderRef.current.slickNext()}
            />
          </ControlsContainer>
        )}
      >
        {slides.map(({ id, content }) => (
          <Slide key={id}>{content}</Slide>
        ))}
      </StyledSlider>
    </SliderContainer>
  )
};

export default Slider;