import React from "react";
import styled, {keyframes} from "styled-components";
import globals from "../globals";
import TabBar from "./TabBar";
import Seperator from "./Seperator";
import Filters from "./Filters";

const CloseControlsView = styled.button`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2% 4%;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.15) 200px
  );
  border: 0.5px solid #ffffff43;
  box-shadow: 4px 8px 28px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 39px;
  color: #fff;
  font-size: 90%;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ${globals.styling.transition};

  &:hover {
    background-color: #fafafa20;
  }

  @media screen and (max-width: 1100px) {
    display: flex;
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
      <CloseControlsView>Close</CloseControlsView>
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
