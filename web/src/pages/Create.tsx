import React, { useState } from "react";
import styled from "styled-components";
// illustration purpose
import EditorSampleImage from "../assets/png/editor-sample.jpg";
import ControlsView from "../components/ControlsView";

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

const Create = () => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);
  const [activeFilterIndex, setActiveFiterIndex] = useState(0);
  const [activeTabBarIndex, setActiveTabBarIndex] = useState(0);

  return (
    <PageContainer>
      <ImageCanvasContainer>
        <Image width="40vw" src={EditorSampleImage} />
      </ImageCanvasContainer>

      <ControlsView 
        activeSliderIndex={activeSliderIndex} 
        setActiveSliderIndex={setActiveSliderIndex}
        filterActiveIndex={activeFilterIndex}
        setFilterActiveIndex={setActiveFiterIndex}
        tabBarActiveIndex={activeTabBarIndex}
        setTabBarActiveIndex={setActiveTabBarIndex}
         />
    </PageContainer>
  );
};

export default Create;
