import styled from "styled-components";
import Slider from "react-slick";

export const SliderContainer = styled.article`
  height: ${512 + 24 + 25}px;
`;

export const StyledSlider = styled(Slider)`
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 19px;

  bottom: ${-25 - 24}px;

  .custom-arrow {
    color: black;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: 200ms all ease;

    :hover {
      opacity: .2;
    }
  }

  .

  ul {
    display: flex;
    align-items: center;
  }

  li button {
    ::before {
      font-size: 14px !important;
      opacity: 1;
      color: #B0B0B0;

      transition: 200ms all ease;
    }

    :hover::before {
      color: #000000;
    }
  }
`;


export const Slide = styled.article`
  background-color: #4A4A4A;
  padding: 24px;
  height: 512px;
  border-radius: 4px 4px 0 0;
`;