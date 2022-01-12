import { useState } from "react";
import styled, { css } from "styled-components";
import BackBlur from "../styles/BackBlur";
import Page from "../styles/Page";

import Lake from "../assets/png/Lake.png";
import Slider from "../styles/Slider";
import Button from "../styles/Button";

const PageContainer = styled(Page)`
  min-height: 100vh;
  max-width: 100vw;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToolsClosed = css`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 85%;
  top: 10%;
  overflow: hidden;

  div {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    width: 20px;
    height: 20px;
    top: 25%;
  }
`;

const ToolsSection = styled.div<{ show: boolean }>`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 40vw;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  z-index: 200;
  padding: 50px;
  box-shadow: 10px 20px 40px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.44, 0.18, 0.22, 0.82);
  overflow: scroll;
  ${BackBlur}

  @media screen and (max-width: 1024px) {
    width: 50vw;
  }

  @media screen and (max-width: 900px) {
    width: 70vw;
    left: 50%;
  }

  ${(p) => p.show && ToolsClosed}
`;

const Tool = styled.div`
  width: 100%;
  padding: 20px;
`;

const ToolsHeader = styled.header`
  font-size: 150%;
  font-weight: bold;
  color: #0a0a0a;
  margin: 8px 0;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ToolsPara = styled.p`
  font-size: 110%;
  color: #0f0f0f;
`;

interface ImageCavnvasProps {
  blur: number;
  contrast: number;
  brightness: number;
  sepia: number;
  saturation: number;
}

const ImageCanvas = styled.img<ImageCavnvasProps>`
  max-height: 90vh;
  max-width: 90vw;
  border-radius: 30px;
  filter: contrast(${(p) => p.contrast + 100}%)
    brightness(${(p) => p.brightness}%) blur(${(p) => p.blur}px)
    saturate(${(p) => p.saturation + 100}%) sepia(${(p) => p.sepia}%);
  box-shadow: 20px 40px 50px 0 #c4c4c4aa;

  @media screen and (max-width: 1024px) {
    width: 85vw;
  }
`;

const Create = () => {
  const [toolsOpen, setToolsOpen] = useState(true);
  const [constrastValue, setContrastValue] = useState<any>(0);
  const [brigthtnessValue, setBrightnessValue] = useState<any>(100);
  const [angleValue, setAngleValue] = useState<any>(0);
  const [blurValue, setBlurValue] = useState<any>(0);
  const [saturationValue, setSaturationValue] = useState<any>(0);
  const [sepiaValue, setSepiaValue] = useState<any>(0);

  return (
    <PageContainer>
      <ToolsSection show={toolsOpen}>
        <Button onClick={() => setToolsOpen(!toolsOpen)}>
          {toolsOpen ? "Filers" : "Close Filters"}
        </Button>
        <Tool>
          <ToolsHeader>Contrast</ToolsHeader>
          <Slider
            currentIndex={constrastValue}
            onChange={(v) => setContrastValue(v)}
          />
        </Tool>

        <Tool>
          <ToolsHeader>Brightness</ToolsHeader>
          <Slider
            currentIndex={brigthtnessValue}
            onChange={(v) => setBrightnessValue(v)}
          />
        </Tool>

        <Tool>
          <ToolsHeader>Angle</ToolsHeader>
          <Slider
            currentIndex={angleValue}
            onChange={(v) => setAngleValue(v)}
          />
        </Tool>

        <Tool>
          <ToolsHeader>Blur</ToolsHeader>
          <Slider currentIndex={blurValue} onChange={(v) => setBlurValue(v)} />
        </Tool>

        <Tool>
          <ToolsHeader>Saturation</ToolsHeader>
          <Slider
            currentIndex={saturationValue}
            onChange={(v) => setSaturationValue(v)}
          />
        </Tool>

        <Tool>
          <ToolsHeader>Sepia</ToolsHeader>
          <Slider
            currentIndex={sepiaValue}
            onChange={(v) => setSepiaValue(v)}
          />
        </Tool>
      </ToolsSection>

      <ImageCanvas
        blur={blurValue}
        saturation={saturationValue}
        brightness={brigthtnessValue}
        contrast={constrastValue}
        sepia={sepiaValue}
        src={Lake}
        alt=""
      />
    </PageContainer>
  );
};

export default Create;
