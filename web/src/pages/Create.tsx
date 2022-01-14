import {useEffect, useState} from "react";
import styled from "styled-components";
// illustration purpose
import EditorSampleImage from "../assets/png/editor-sample.jpg";
import ControlsView from "../components/ControlsView";
import BrightnessSlider from "../components/sliders/BrightnessSlider";
import FiltersSlider from "../components/sliders/FiltersSlider";
import ContrastSlider from "../components/sliders/ContrastSlider";
import SaturationSlider from "../components/sliders/SaturationSlider";
import QualitySlider from "../components/sliders/QualitySlider";
import {applyFilter, FilterInput} from "../globals";

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

  @media screen and (max-width: 1100px) {
    max-width: 95vw;
    max-height: 95vh;
  }
`;

// pass in server response width from JIMP
const Image = styled.img<{width?: string; filterInput: FilterInput}>`
  max-width: 100%;
  height: auto;
  width: ${(p) => p.width};

  ${(p) => applyFilter(p.filterInput)};

  @media screen and (max-width: 600px) {
    max-width: 95vw;
    max-height: 95vh;
    width: 90vw;
  }
`;

const Create = () => {
  const [activeFilterIndex, setActiveFiterIndex] = useState(0);
  const [activeTabBarIndex, setActiveTabBarIndex] = useState(0);
  const [activeCurrentSliderText, setActiveCurrentSliderText] =
    useState("Brightness");

  // settings
  const [brightnessSliderIndex, setBrightnessSliderIndex] = useState(100);
  const [qualitySliderIndex, setQualitySliderIndex] = useState(100);
  const [saturationSliderIndex, setSaturationSliderIndex] = useState(10);
  const [contrastSliderIndex, setContrastSliderIndex] = useState(10);
  const [filterSliderIndex, setFilterSliderIndex] = useState(50);

  const filterInput: FilterInput = {
    brightness: brightnessSliderIndex,
    saturation: saturationSliderIndex,
    contrast: contrastSliderIndex,
    hueRotate: 0,
    blur: 0,
    sepia: 0,
  };

  const [activeSlider, setActiveSlider] = useState(
    <BrightnessSlider
      count={brightnessSliderIndex}
      setCount={setBrightnessSliderIndex}
    />
  );

  useEffect(() => {
    switch (activeTabBarIndex) {
      case 0:
        setActiveCurrentSliderText("Brightness");
        setActiveSlider(
          <BrightnessSlider
            count={brightnessSliderIndex}
            setCount={setBrightnessSliderIndex}
          />
        );
        break;

      case 1:
        setActiveCurrentSliderText("Quality");
        setActiveSlider(
          <QualitySlider
            count={qualitySliderIndex}
            setCount={setQualitySliderIndex}
          />
        );
        break;

      case 2:
        setActiveCurrentSliderText("Saturation");
        setActiveSlider(
          <SaturationSlider
            count={saturationSliderIndex}
            setCount={setSaturationSliderIndex}
          />
        );
        break;

      case 3:
        setActiveCurrentSliderText("Contrast");
        setActiveSlider(
          <ContrastSlider
            count={contrastSliderIndex}
            setCount={setContrastSliderIndex}
          />
        );
        break;

      case 4:
        setActiveCurrentSliderText("Filters");
        setActiveSlider(
          <FiltersSlider
            count={filterSliderIndex}
            setCount={setFilterSliderIndex}
          />
        );
        break;

      default:
        setActiveCurrentSliderText("Not available option");
        break;
    }
  }, [
    activeTabBarIndex,
    brightnessSliderIndex,
    qualitySliderIndex,
    saturationSliderIndex,
    contrastSliderIndex,
    filterSliderIndex,
  ]);

  return (
    <PageContainer>
      <ImageCanvasContainer>
        <Image filterInput={filterInput} width="40vw" src={EditorSampleImage} />
      </ImageCanvasContainer>

      <ControlsView
        currentSlider={activeSlider}
        filterActiveIndex={activeFilterIndex}
        setFilterActiveIndex={setActiveFiterIndex}
        tabBarActiveIndex={activeTabBarIndex}
        setTabBarActiveIndex={setActiveTabBarIndex}
        currentSliderText={activeCurrentSliderText}
      />
    </PageContainer>
  );
};

export default Create;
