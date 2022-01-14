import styled from "styled-components";

export const CurrentSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const SliderCurrentStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  max-height: 100%;
`;

export const SliderCurrentStatusText = styled.h1`
  font-weight: 600;
  font-size: 28px;
  color: #ffffff;
  margin: 0 4px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  max-width: 100%;
  height: 58px;
  flex-wrap: wrap;
`;

export interface SliderCommonsProps {
  statusText: {
    text: string;
    count: number;
  };
  slider: {
    activeSliderIndex: number;
    setActiveSliderIndex: React.Dispatch<React.SetStateAction<number>>;
    sliderCount: number;
  };
}

export interface SliderProps {
  keyIndex: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const stepperCounts: number[] = [
  0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];
