import React from "react";
import styled, {keyframes} from "styled-components";
import globals from "../globals";
import TabBar from "./TabBar";
import Seperator from "./Seperator";
import Filters from "./Filters";

const ControlViewStyleAnimation = keyframes`
  from {
    bottom: -100%;
  }
`;

const ControlsViewStyle = styled.div`
  position: fixed;
  bottom: 0;
  min-height: 317px;
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
  overflow: hidden;

  @media screen and (min-width: 1100px) {
    position: relative;
    margin: 0 40px;
    width: 50vw;
    height: 90vh;
    border-radius: 30px;
    box-shadow: 4px 8px 28px 0px #00000026;
  }

  @media screen and (max-width: 900px) {
    position: absolute;
  }
`;

const ControlsView = (props: {
  currentSlider: JSX.Element;
  filterActiveIndex: number;
  setFilterActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  tabBarActiveIndex: number;
  setTabBarActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  currentSliderText: string;
}) => {
  return (
    <ControlsViewStyle>
      {props.currentSlider}

      <TabBar
        activeTab={props.tabBarActiveIndex}
        setActiveTab={props.setTabBarActiveIndex}
      />
      <Seperator />
      <Filters
        activeIndex={props.filterActiveIndex}
        setActiveIndex={props.setFilterActiveIndex}
      />
    </ControlsViewStyle>
  );
};

export default ControlsView;
