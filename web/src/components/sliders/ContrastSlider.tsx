import React, {FunctionComponent} from "react";
import Slider from "../Slider";
import {
  CurrentSliderContainer,
  SliderCurrentStatus,
  SliderCurrentStatusText,
  SliderContainer,
  stepperCounts,
} from "./SliderCommons";

interface ContrastSliderProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ContrastSlider: FunctionComponent<ContrastSliderProps> = (
  props: ContrastSliderProps
) => {
  return (
    <CurrentSliderContainer>
      <SliderCurrentStatus>
        <SliderCurrentStatusText>Contrast</SliderCurrentStatusText>
        <SliderCurrentStatusText>{props.count}%</SliderCurrentStatusText>
      </SliderCurrentStatus>

      <SliderContainer>
        {stepperCounts.map((count, index) => (
          <Slider
            keyIndex={count}
            activeIndex={props.count}
            setActiveIndex={() => props.setCount(count)}
            key={index}
          />
        ))}
      </SliderContainer>
    </CurrentSliderContainer>
  );
};

export default ContrastSlider;
