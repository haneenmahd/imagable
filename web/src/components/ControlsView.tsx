import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import globals from "../globals";
import TabBar from "./TabBar";
import CurrentSlider from "./CurrentSlider";
import Seperator from "./Seperator";

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

      <TabBar />
      <Seperator />
    </ControlsViewStyle>
  );
};

export default ControlsView;