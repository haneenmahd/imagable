import React, { useState } from "react";
import styled from "styled-components";
import BackBlur from "../styles/BackBlur";
import Page from "../styles/Page";

import Sunset from "../assets/png/Lake.png";
import Slider from "../styles/Slider";

const PageContainer = styled(Page)`
  min-height: 100vh;
  max-width: 100vw;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToolsSection = styled.div<{ show: boolean }>`
  display: ${(p) => (p.show ? "default" : "none")};
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
  ${BackBlur}
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

const ToolsPara = styled.p`
  font-size: 110%;
  color: #0f0f0f;
`;

const ImageCanvas = styled.img`
  max-height: 90vh;
  width: auto;
  border-radius: 30px;
  filter: blur(1px) contrast(500px);
  box-shadow: 20px 40px 50px 0 #c4c4c4aa;
`;

const Create = () => {
  const [toolsOpen, setToolsOpen] = useState(true);
  const [constrastValue, setContrastValue] = useState<any>(0);
  const [brigthtnessValue, setBrightnessValue] = useState<any>(0);
  const [angleValue, setAngleValue] = useState<any>(0);

  return (
    <PageContainer>
      <ToolsSection show={toolsOpen}>
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
      </ToolsSection>

      <ImageCanvas src={Sunset} />
    </PageContainer>
  );
};

export default Create;
