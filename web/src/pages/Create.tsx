import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// example image editor usage
import EditorSampleImage from "../assets/png/editor-sample.jpg";
import globals from "../globals";

// fix this issue over here
// module "/Users/''/Code/Javascript/@imagable/imagable/web/src/components/Slider"
// Already included filename
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

const ControlViewStyleAnimation = keyframes`
  from {
    bottom: -100%;
  }
`;

const ControlsViewStyle = styled.div`
  position: fixed;
  bottom: 0;
  height: 417px;
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
  return (
    <ControlsViewStyle>
      <Slider value={0} />
    </ControlsViewStyle>
  );
}

const Create = () => {
  return (
    <PageContainer>
      <ImageCanvasContainer>
        <Image width="40vw" src={EditorSampleImage} />
      </ImageCanvasContainer>

      <ControlsView/>
    </PageContainer>
  );
}

export default Create;