import styled from "styled-components";
import Slider from "../components/Slider";

const CurrentSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
  @media screen and (max-height: 740px) {
    margin-top: 100px;
  }
`;

const SliderCurrentStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  max-height: 100%;
`;

const SliderCurrentStatusText = styled.h1`
  font-weight: 600;
  font-size: 28px;
  color: #ffffff;
  margin: 0 4px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  max-width: 100%;
  height: 58px;
  flex-wrap: wrap;
`;

const CurrentSlider = (props: {
  statusText: {
    text: string;
    count: number;
  };
  slider: {
    activeSliderIndex: number;
    setActiveSliderIndex: React.Dispatch<React.SetStateAction<number>>;
    sliderCount: number;
  };
}) => {
  const steppersDefault = [
    0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100,
  ];

  const steppers: number[] = steppersDefault;

  return (
    <CurrentSliderContainer>
      <SliderCurrentStatus>
        <SliderCurrentStatusText>
          {props.statusText.text}
        </SliderCurrentStatusText>
        <SliderCurrentStatusText>
          {props.statusText.count}%
        </SliderCurrentStatusText>
      </SliderCurrentStatus>

      <SliderContainer>
        {steppers.map((count, index) => (
          <Slider
            keyIndex={count}
            activeIndex={props.slider.activeSliderIndex}
            setActiveIndex={props.slider.setActiveSliderIndex}
            key={index}
          />
        ))}
      </SliderContainer>
    </CurrentSliderContainer>
  );
};

export default CurrentSlider;