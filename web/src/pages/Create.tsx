import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// example image editor usage
import EditorSampleImage from "../assets/png/editor-sample.jpg";
import globals from "../globals";
import Slider from "../components/Slider";

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageCanvasContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 90vh;
  max-width: 90vw;
  box-shadow: 15px 28px 21px rgba(0, 0, 0, 0.08);
  border-radius: 49px;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    max-width: 95vw;
    max-height: 95vh;
  }
`;

// pass in server response width from JIMP
const Image = styled.img<{ width?: string }>`
  max-width: 100%;
  height: auto;
  width: ${(p) => p.width};

  @media screen and (max-width: 600px) {
    max-width: 95vw;
    max-height: 95vh;
    width: 90vw;
  }
`;

const CurrentSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const SliderCurrentStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
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
  const steppers: number[] = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  ];

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

const ControlViewStyleAnimation = keyframes`
  from {
    bottom: -100%;
  }
`;

const ControlsViewStyle = styled.div`
  position: fixed;
  bottom: 0;
  height: 317px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(63px);
  -webkit-backdrop-filter: blur(63px);
  animation: ${ControlViewStyleAnimation} 1s ${globals.styling.transition};
  animation-delay: 1s;

  @media screen and (min-width: 600px) {
    position: relative;
    margin: 0 40px;
    width: 50vw;
    height: 90vh;
    border-radius: 30px;
    box-shadow: 4px 8px 28px 0px #00000026;
  }
`;

const ControlsView = () => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(50);

  return (
    <ControlsViewStyle>
      <CurrentSlider
        slider={{
          activeSliderIndex,
          setActiveSliderIndex,
          sliderCount: 10,
        }}
        statusText={{
          count: activeSliderIndex,
          text: "Brightness",
        }}
      />
    </ControlsViewStyle>
  );
};

const Create = () => {
  return (
    <PageContainer>
      <ImageCanvasContainer>
        <Image width="40vw" src={EditorSampleImage} />
      </ImageCanvasContainer>

      <ControlsView />
    </PageContainer>
  );
};

export default Create;
